import React, { createContext, useContext } from "react";
import "./Tab.css";
const TabContext = createContext(null);

export const Tabs = ({ children, currentIndex, onChange }) => {
  return (
    // {true && <div>HI</div>}
    <TabContext.Provider value={{ currentIndex, onChange }}>
      <div className="container">{children}</div>
    </TabContext.Provider>
  );
};

export const TabHeader = ({ children }) => {
  return <div className="tabHeader">{children}</div>;
};

export const Tab = ({ children, index }) => {
  const { onChange } = useContext(TabContext);
  return <div onClick={() => onChange(index)}>{children}</div>;
};

export const TabContainer = ({ children }) => {
  return <div className="tabContainer">{children}</div>;
};
export const TabPanel = ({ children, index }) => {
  const { currentIndex } = useContext(TabContext);
  return <div>{currentIndex === index && <h1>{children}</h1>}</div>;
};
