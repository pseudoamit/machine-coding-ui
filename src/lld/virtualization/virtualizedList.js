import React from "react";
import { Virtuoso } from "react-virtuoso";

const VirtualizedList = () => {
  const data = Array.from({ length: 100000 }, (_, i) => `Item ${i}`);
  return (
    <>
      <Virtuoso
        style={{ height: "500px" }}
        data={data}
        totalCount={data?.length}
        itemContent={(index, item) => (
          <div style={{ padding: "20px", borderBottom: "1px solid #333" }}>
            {item}
          </div>
        )}
      />
    </>
  );
};

export default VirtualizedList;
