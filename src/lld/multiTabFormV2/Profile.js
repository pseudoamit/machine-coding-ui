const Profile = ({ data, updateProfile = () => {} }) => {
  const handleProfileChange = (e, type) => {
    updateProfile(e?.target?.value, type);
  };
  return (
    <>
      <h1>Profile Section</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label style={{ display: "flex", gap: "0.5rem" }}>
          Enter Name
          <input
            value={data?.name?.value}
            type={data?.name?.type || "text"}
            onChange={(e) => handleProfileChange(e, data?.name?.label)}
          />
          {data?.name?.error?.isError && (
            <span style={{ color: "red" }}>{data?.name?.error?.message}</span>
          )}
        </label>
        <label style={{ display: "flex", gap: "0.5rem" }}>
          Enter Age
          <input
            value={data?.age?.value}
            type={data?.age?.type || "number"}
            onChange={(e) => handleProfileChange(e, data?.age?.label)}
          />
        </label>
      </div>
    </>
  );
};

export default Profile;
