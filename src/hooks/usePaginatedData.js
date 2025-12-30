import { useState } from "react";

const PAGE_SIZE = 10;

export function usePaginatedData() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  async function loadMore() {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${
          page * PAGE_SIZE
        }`
      );
      const data = await res.json();

      console.log({ data });
      if (data && data?.products && data?.products?.length > 0) {
        setItems((prev) => [...prev, ...data?.products]);
      }
      setHasMore(data?.products?.length === PAGE_SIZE);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log(`Error occured`);
    } finally {
      setLoading(false);
    }
  }

  return { items, loading, hasMore, loadMore };
}
