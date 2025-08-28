export default function Interest({ interestData, updateInterest }) {
  const interestChangeHandler = (e, id, type) => {
    updateInterest(e.target.checked, id, type);
  };
  return (
    <div>
      {Object.keys(interestData).map((child) => (
        <div key={child}>
          <h3>{interestData[child].label}</h3>
          {interestData[child].options.map((innerChild) => {
            console.log("innerchild++", innerChild); // ✅ log here safely

            return (
              <label key={innerChild?.id}>
                <input
                  type={interestData[child]?.type}
                  name={child} // keep name for radio groups
                  checked={innerChild?.isSelected || false} // ✅ use checked instead of value
                  onChange={(e) =>
                    interestChangeHandler(
                      e,
                      innerChild.id,
                      interestData[child]?.label
                    )
                  }
                />
                {innerChild?.name}
              </label>
            );
          })}
        </div>
      ))}
    </div>
  );
}
