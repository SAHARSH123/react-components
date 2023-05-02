import React, { useState } from "react";

const Folder = ({ explorerData }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [currentData, setCurrentData] = useState(explorerData);
  const [showInput, setShowInput] = useState(false);
  const [inpValue, setInpValue] = useState("");
  const [isFolder, setIsFolder] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const data = { ...currentData };
      if (isFolder) {
        const newItem = {
          folderName: inpValue,
          isFolder: true,
          items: [],
        };
        data.items.unshift(newItem);
      } else {
        const newItem = {
          folderName: inpValue,
          isFolder: false,
          items: [],
        };
        data.items.unshift(newItem);
      }
      setCurrentData(data);
      setShowInput(false);
      setInpValue("");
    }
  };

  const addFolder = (f) => {
    if (!isExpand) setIsExpand(true);
    if (!showInput) setShowInput(true);
    if (f === "folder") {
      setIsFolder(true);
    } else {
      setIsFolder(false);
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setInpValue(val);
  };
  return (
    <>
      <div className="flexParent">
        <div
          className={currentData.isFolder ? "folder" : ""}
          onClick={() => setIsExpand((cur) => !cur)}>
          {currentData.folderName}
        </div>
        {currentData.isFolder && (
          <button onClick={() => addFolder("folder")}>Add Folder</button>
        )}
        {currentData.isFolder && (
          <button onClick={() => addFolder("file")}>Add File</button>
        )}
      </div>

      <div style={{ paddingLeft: 10 }}>
        {isExpand && showInput && (
          <input
            value={inpValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus
            type="text"
          />
        )}
        {isExpand &&
          currentData.items.map((item) => {
            return <Folder key={item.folderName} explorerData={item} />;
          })}
      </div>
    </>
  );
};

export default Folder;
