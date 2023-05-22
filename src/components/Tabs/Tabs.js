import React, { useCallback, useState } from "react";
import Tab from "./Tab";
import "./tab.css";

const TABS = ["Html", "JavaScript", "CSS"];

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("Html");

  const handleTabChange = useCallback((selectedtab) => {
    setCurrentTab(selectedtab);
  }, []);

  return (
    <div>
      <div className="parentContainer">
        {TABS.map((tab) => (
          <Tab
            key={tab}
            currentTab={currentTab}
            tabName={tab}
            onChange={handleTabChange}
          />
        ))}
      </div>
      {currentTab === "Html" && (
        <div>
          HTMl Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          odio doloribus, magni veritatis, laudantium tempore placeat qui modi
          soluta earum, nostrum incidunt iste distinctio adipisci molestias!
          Quas sunt nostrum eaque?
        </div>
      )}
      {currentTab === "JavaScript" && (
        <div>
          JavaScript Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Animi odio doloribus, magni veritatis, laudantium tempore placeat qui
          modi soluta earum, nostrum incidunt iste distinctio adipisci
          molestias! Quas sunt nostrum eaque?
        </div>
      )}
      {currentTab === "CSS" && (
        <div>
          CSS Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          odio doloribus, magni veritatis, laudantium tempore placeat qui modi
          soluta earum, nostrum incidunt iste distinctio adipisci molestias!
          Quas sunt nostrum eaque?
        </div>
      )}
    </div>
  );
};

export default Tabs;
