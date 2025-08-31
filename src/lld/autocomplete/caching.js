// 1️⃣ Why it wasn’t working earlier
// Your original code:
// let debouncedFunction = useCallback(debounce(getRecipes, 400), []);

// and inside getRecipes:

// if (cache[input]) {
//   setRecipes(cache[input]);
//   return;
// }

// Problem 1: Stale closure of cache

// In React, when you define a function inside a component, it “captures” the state at that moment — this is called a closure.

// Because your debouncedFunction used useCallback(..., []), it was created once at component mount.

// At that time, cache was {} (empty).

// Later, when setCache updated the cache, the closure inside getRecipes still “saw” the old empty cache, because it was captured in memory when debouncedFunction was created.

// Result → caching never triggered because cache[input] was always undefined inside that closure.

// Problem 2: Debounce function capturing stale getRecipes

// Your debouncedFunction wrapped getRecipes at mount.

// Any updates to cache or recipes didn’t affect the already created debounced function, because it’s still using the old getRecipes.

// In short:

// React state is immutable — updating it doesn’t automatically update existing closures.

// debouncedFunction and getRecipes were “frozen in time” with the initial cache {}.

// That’s why caching didn’t work.

// 2️⃣ Why it works now
// Key changes:

// getRecipes is wrapped with useCallback and depends on cache:

// const getRecipes = useCallback(
//   async (input) => {
//     if (cache[input]) {
//       setRecipes(cache[input]);
//       return;
//     }
//     ...
//   },
//   [cache] // <-- now getRecipes always sees the latest cache
// );

// Now, whenever cache changes, React creates a new getRecipes function that sees the latest cache.

// So, when you check if (cache[input]), it reflects the actual current cache.

// debouncedFunction also depends on getRecipes:

// const debouncedFunction = useCallback(debounce(getRecipes, 400), [getRecipes]);

// Now the debounced function always wraps the latest version of getRecipes.

// If cache updates, a new getRecipes is created, and a new debounced function wraps it.

// useEffect calls debouncedFunction(input):

// useEffect(() => {
//   if (input) debouncedFunction(input);
// }, [input, debouncedFunction]);

// Every time input changes, the effect runs.

// Because debouncedFunction is now always the latest version, it correctly reads the updated cache.

// Result → caching works perfectly.

// ✅ Summary
// Aspect	Old Code	New Code
// getRecipes sees latest cache?	❌ No (stale closure)	✅ Yes (cache in dependency array)
// debouncedFunction sees latest getRecipes?	❌ No (created once)	✅ Yes (depends on getRecipes)
// Caching works?	❌ No	✅ Yes

// Key React concept here:

// Closures capture the state at the time of function creation.
// To make functions see the latest state, you either:

// Include the state in the useCallback dependency array, or

// Use a useRef (mutable container) that always points to the latest state.
