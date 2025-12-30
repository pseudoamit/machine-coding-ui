import { useEffect, useRef } from "react";
import { usePaginatedData } from "../../hooks/usePaginatedData";

function ProductList() {
  const { items, loading, hasMore, loadMore } = usePaginatedData();

  const loadRef = useRef(null);

  useEffect(() => {
    if (!loadRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    observer.observe(loadRef.current);

    return () => observer.disconnect();
  }, [loadMore, hasMore, loading]);

  return (
    <>
      {loading && <div>Loading...</div>}

      {items && items?.map((item) => <div key={item?.id}>{item?.title}</div>)}

      {hasMore && <div ref={loadRef}>scroll for more</div>}
    </>
  );
}

export default ProductList;
