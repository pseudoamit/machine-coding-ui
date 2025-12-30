import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        if (!ignore) setData(json);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchData();

    return () => {
      ignore = true; // avoid state update on unmounted
    };
  }, [url]);

  return { data, loading, error };
}

// 1️⃣ You make the ASC call
// Effect #1 runs
// ignore₁ = false
// ASC fetch started

// 2️⃣ Before ASC finishes, user selects DESC

// cleanup of Effect #1 runs → ignore₁ = true
// (ASC fetch is now "stale")

// Effect #2 runs → ignore₂ = false
// (DESC fetch is now the "active" request)

// 3️⃣ ASC fetch finishes LATE

// It checks:

// if (!ignore₁) setData()   // ignore₁ is true → DO NOT update state

// ASC data is IGNORED ✔️

// 4️⃣ DESC fetch finishes

// It checks:

// if (!ignore₂) setData()   // ignore₂ is false → update is allowed

// DESC data is shown ✔️

// 🧠 1️⃣ Why it is a Race Condition
// Definition:

// A race condition happens when two async tasks compete,
// and the wrong one updates the state last.

// Example:

// ASC request started

// DESC request started later

// ASC response arrives after DESC

// Old ASC result overrides DESC result → WRONG UI

// This is a classic race condition in React async fetching.

// 🧠 2️⃣ Why React warns about Memory Leak

// If the component unmounts while the fetch is still running:

// fetch continues in background (JavaScript cannot cancel it automatically)

// when it completes, it tries to do setData()

// but the component is already unmounted

// React logs:

// Warning: Can't perform a React state update on an unmounted component.

// This is considered a memory leak, because React retained a reference to a component that should be garbage-collected.
