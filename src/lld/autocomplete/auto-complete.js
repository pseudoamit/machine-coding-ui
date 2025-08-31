import { useCallback, useEffect, useState } from "react";
import "./auto-complete.css";

//TODO: to understand why cache was not working , follow caching.js file
export default function AutoComplete() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({});

  const getRecipes = useCallback(
    async (input) => {
      console.log("+++", cache);
      if (cache[input]) {
        console.log("CACHE RETURN", input);
        setRecipes(cache[input]);
        return;
      }

      console.log("Calculating", input);
      const res = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`
      );
      const data = await res.json();
      if (data?.recipes?.length > 0) {
        setRecipes(data?.recipes);
        setCache((prev) => ({
          ...prev,
          [input]: data?.recipes,
        }));
      }
    },
    [cache]
  );

  const debounce = (callback, delay) => {
    let timer = null;

    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  let debouncedFunction = useCallback(debounce(getRecipes, 400), [getRecipes]);

  useEffect(() => {
    if (input) {
      debouncedFunction(input);
    }
  }, [input, debouncedFunction]);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div>
        <h1>Typeahead autocomplete</h1>
        <input
          value={input}
          onChange={inputChangeHandler}
          style={{ width: "28rem" }}
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
        />

        {showResult && (
          <div className="search-wrapper" style={{ border: "1px solid black" }}>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {recipes &&
                recipes?.length > 0 &&
                recipes?.map((recipie) => (
                  <li style={{ listStyle: "none" }}>{recipie?.name}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
