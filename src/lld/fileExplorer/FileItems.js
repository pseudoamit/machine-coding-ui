import React, { useState } from "react";

const FileItems = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (data.isFolder) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div style={{ paddingLeft: "20px" }}>
      {/* Clickable Folder/File Name */}
      <div
        style={{ cursor: data.isFolder ? "pointer" : "default" }}
        onClick={handleToggle}
      >
        {data.isFolder ? (
          isOpen ? (
            <i
              className="fa-regular fa-folder-open"
              style={{ marginRight: "5px" }}
            ></i>
          ) : (
            <i
              className="fa-regular fa-folder"
              style={{ marginRight: "5px" }}
            ></i>
          )
        ) : (
          <i className="fa-regular fa-file" style={{ marginRight: "5px" }}></i>
        )}
        <span>{data?.name}</span>
      </div>

      {/* Render children only if open */}
      {isOpen &&
        data?.items?.map((child) => <FileItems key={child.id} data={child} />)}
    </div>
  );
};

export default FileItems;
