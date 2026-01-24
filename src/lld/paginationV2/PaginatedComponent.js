import { useMemo, useState } from "react";

const tableContent = Array.from({ length: 70 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  age: `Age is ${30 + i + 1}`,
}));

const PaginatedComponent = ({ pageSize = 10 }) => {
  const totalPages = Math.ceil(tableContent?.length / pageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    return tableContent?.slice(start, end);
  }, [currentPage, tableContent, pageSize]);

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <h1>Table Content </h1>

      <div>
        <table style={{ borderSpacing: "40px 10px" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>

          {paginatedData &&
            paginatedData?.map((data) => (
              <tr>
                <td>{data?.id}</td>
                <td>{data?.name}</td>
                <td>{data?.age}</td>
              </tr>
            ))}
        </table>
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "0.5rem" }}>
        <button disabled={currentPage === 1} onClick={handlePrev}>
          Prev
        </button>
        <button disabled={currentPage === totalPages} onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default PaginatedComponent;
