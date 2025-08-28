export default function Profile({ profileData, updateProfile }) {
  const inputChangeHandler = (e, type) => {
    updateProfile(e.target.value, type);
  };
  return (
    <div>
      {profileData &&
        Object.keys(profileData).map((child) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rme" }}
          >
            <label>{profileData[child].name}</label>
            <input
              type="text"
              value={profileData[child].value}
              onChange={(e) => inputChangeHandler(e, profileData[child].name)}
            />
          </div>
        ))}
    </div>
  );
}
