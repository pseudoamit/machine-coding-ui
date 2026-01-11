import { useCallback, useEffect, useRef, useState } from "react";
import { useDebounceForAutoComplete } from "../../hooks/useDebounceForAutoComplete";

const AutoComplete = () => {
  const [mobileList, setMobileList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const cacheRef = useRef({});

  const getMobileList = useCallback(async (search) => {
    if (!search) {
      setMobileList([]);
      return;
    }

    if (cacheRef.current[search]) {
      setMobileList(cacheRef.current[search]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      const data = await res.json();

      const products = data?.products || [];
      cacheRef.current[search] = products;
      setMobileList(products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const debounceFn = useDebounceForAutoComplete(getMobileList, 500);

  useEffect(() => {
    debounceFn(search);
  }, [search]);

  const handleReciepeSearch = (e) => {
    setSearch(e?.target?.value);
  };

  return (
    <>
      <div>
        <input
          onChange={handleReciepeSearch}
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
        />

        {loading && <div>Loading</div>}
        {!loading && showResult && (
          <ul>
            {mobileList &&
              mobileList?.map((mobile) => (
                <li key={mobile?.id}>{mobile?.title}</li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AutoComplete;
