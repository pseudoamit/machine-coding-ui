import React, { useCallback, useEffect, useState } from "react";
import throttle from "lodash.throttle";

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [hashMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const limit = 20;

  const fetchMoreData = async () => {
    if (loading || !hashMore) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${posts.length}&_limit=${limit}`
      );
      const data = await res.json();

      if (data.length < limit) {
        setHasMore(false); // No more data expected
      }

      setPosts((prev) => [...prev, ...data]);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoreData(); // initial fetch
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = useCallback(
    throttle(() => {
      const bottomPage =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.body.offsetHeight;

      if (bottomPage) {
        fetchMoreData();
      }
    }, 1000),
    [posts, hashMore]
  );

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        Infinite Scroll (No Page Variable)
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}
          >
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {loading && <h3 style={{ textAlign: "center" }}>Loading...</h3>}
      {error && <p style={{ color: "red" }}>Error fetching posts.</p>}
      {!hashMore && !loading && (
        <p style={{ textAlign: "center" }}>🎉 No more posts to load</p>
      )}
    </div>
  );
};

export default InfiniteScroll;
