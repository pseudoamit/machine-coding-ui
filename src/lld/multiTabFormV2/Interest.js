import { useEffect, useState } from "react";

const Interest = ({ data, updateInterest }) => {
  const [selectedHobbies, setSelectedHobbies] = useState(
    data?.hobbies?.selectedValues,
  );
  const [selectedLanguage, setSelectedLanguage] = useState(
    data?.language?.selectedValues,
  );

  const updateHobbiesHandler = (e) => {
    setSelectedHobbies((prev) => [...prev, e?.target?.value]);
  };

  const updateLanguageHandler = (e) => {
    setSelectedLanguage(e.target.value);
  };

  useEffect(() => {
    updateInterest(selectedHobbies, "hobbies");
    updateInterest(selectedLanguage, "language");
  }, [selectedHobbies, selectedLanguage]);

  return (
    <>
      <h1>Interest Section</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <div>Select Hobbies </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data?.hobbies?.options?.map((option) => (
              <label>
                <input
                  value={option}
                  type={data?.hobbies?.type}
                  onChange={updateHobbiesHandler}
                  checked={selectedHobbies.includes(option)}
                />
                {option}
              </label>
            ))}

            {data?.hobbies?.error?.isError && (
              <span style={{ color: "red" }}>
                {data?.hobbies?.error?.message}
              </span>
            )}
          </div>
        </div>

        <div>
          <div>Select Language </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data?.language?.options?.map((option) => (
              <label>
                <input
                  value={option}
                  type={data?.language?.type}
                  onChange={updateLanguageHandler}
                  checked={selectedLanguage === option}
                />
                {option}
              </label>
            ))}
            {data?.language?.error?.isError && (
              <span style={{ color: "red" }}>
                {data?.language?.error?.message}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Interest;
