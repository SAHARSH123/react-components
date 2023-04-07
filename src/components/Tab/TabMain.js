import React, { useState } from "react";
import { Tabs, TabContainer, TabHeader, Tab, TabPanel } from "./Tabs";

const TabMain = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleChange = (index) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      <Tabs currentIndex={selectedIndex} onChange={handleChange}>
        <TabHeader>
          <Tab index={0}>First</Tab>
          <Tab index={1}>Second</Tab>
          <Tab index={2}>Third</Tab>
        </TabHeader>
        <TabContainer>
          <TabPanel index={0}>First Item</TabPanel>
          <TabPanel index={1}>Second Item</TabPanel>
          <TabPanel index={2}>Third Item</TabPanel>
        </TabContainer>
      </Tabs>
    </div>
  );
};

export default TabMain;
