import React, { useState } from "react";

const VsCodeFileStructure = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleFolderClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleAddFolderOrFileClick = (isFolder) => {
    setIsOpen(true);
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };

  const renderFileAndFolder = () => {
    if (data.isFolder) {
      if (!isOpen) {
        return <i class="fa-regular fa-folder"></i>;
      } else {
        return <i class="fa-regular fa-folder-open"></i>;
      }
    } else {
      return <i class="fa-regular fa-file"></i>;
    }
  };

  const addFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      setShowInput({ ...showInput, visible: false });
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.3rem",
            marginBottom: "0.3rem",
          }}
          onClick={handleFolderClick}
        >
          {renderFileAndFolder()}
          <span>{data?.name}</span>
        </div>
        <div>
          {data.isFolder && (
            <div>
              <button onClick={() => handleAddFolderOrFileClick(true)}>
                NewFolder +
              </button>
              <button onClick={() => handleAddFolderOrFileClick(false)}>
                NewFile +
              </button>
            </div>
          )}
        </div>
      </div>

      {showInput.visible && (
        <div style={{ marginLeft: "20px" }}>
          <span>
            {showInput.isFolder ? (
              <i class="fa-regular fa-folder"></i>
            ) : (
              <i class="fa-regular fa-file"></i>
            )}
          </span>
          <input
            type="text"
            onBlur={() => setShowInput({ ...showInput, visible: false })}
            autoFocus
            onKeyDown={addFolder}
          />
        </div>
      )}
      {isOpen &&
        data?.items?.length > 0 &&
        data?.items?.map((child, index) => (
          <div style={{ marginLeft: "20px" }}>
            <VsCodeFileStructure data={child} />
          </div>
        ))}
    </>
  );
};

export default VsCodeFileStructure;
