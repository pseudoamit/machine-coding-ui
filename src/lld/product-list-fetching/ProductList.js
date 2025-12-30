import { useState } from "react";
import useFetch from "../../hooks/useFetch";

function ProductList() {
  const [sortOrder, setSortOrder] = useState("asc");

  const url = `https://fakestoreapi.com/products?sort=${sortOrder}`;

  const { data, loading, error } = useFetch(url);

  const handleChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {/* Dropdown */}
      <select value={sortOrder} onChange={handleChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Render Product List */}
      {!loading && !error && (
        <ul>
          {data.map((item) => (
            <li key={item.id} style={{ margin: "10px 0" }}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
