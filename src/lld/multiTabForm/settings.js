export default function Settings({ settingsData, updateSettings }) {
  const handleSelectionChange = (e) => {
    updateSettings(e.target.value);
  };
  return (
    <>
      <div>
        <h2>Select NewsLetter</h2>
        <select
          value={settingsData?.selectedNewsLetter}
          onChange={handleSelectionChange}
        >
          <option value="">Select News letter</option>
          {settingsData?.options?.map((option) => (
            <option value={option.id}>{option.name}</option>
          ))}
        </select>
      </div>
    </>
  );
}
