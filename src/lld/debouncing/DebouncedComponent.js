import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

const devices = ["apple2025", "samsung2025", "oppo2026", "vivo2027"];
const DebouncedComponent = () => {
  const [search, setSearch] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);

  const getFilteredDevices = (searchTerm) => {
    console.log("Searching devices");
    const result = devices?.filter((device) => device.includes(searchTerm));

    setFilteredSearch(result);
  };

  const debouncedFn = useDebounce(getFilteredDevices, 500);

  const handleDeviceSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    debouncedFn(search);
  }, [search]);

  return (
    <>
      <h1>Search Devices</h1>
      <input value={search} onChange={handleDeviceSearch} />
      <ul>
        {filteredSearch &&
          filteredSearch?.length > 0 &&
          filteredSearch?.map((device, index) => <li key={index}>{device}</li>)}
      </ul>
    </>
  );
};

export default DebouncedComponent;
