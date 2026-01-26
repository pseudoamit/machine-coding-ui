import { useEffect, useState } from "react";

const Setting = ({ data, updateSettings }) => {
  const [selectedNewsLetter, setSelectedNewsLetter] = useState(
    data?.selectedNewsLetter,
  );

  const updateNewsLetter = (e) => {
    setSelectedNewsLetter(e?.target?.value);
  };

  useEffect(() => {
    updateSettings(selectedNewsLetter, "setting");
  }, [selectedNewsLetter]);
  return (
    <>
      <h1>Setting Section</h1>
      <div>
        <div>Select NewsLetter </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {data?.options?.map((option) => (
            <label>
              <input
                type={data?.type}
                value={option}
                onChange={updateNewsLetter}
                checked={selectedNewsLetter === option}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Setting;
