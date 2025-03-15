import React from "react";
import Tab from "./tab"; // Child component
import {Tab as TabType} from "../types/tab"

interface TabsProps {
  tabs: TabType[]|null;
}

const Tabs: React.FC<TabsProps> = ({tabs}) => {

  return (
    <div className="nav-bar">
      {tabs?.map((tab) => (
        <Tab key={tab.id} tab={tab} />
      ))}
    </div>
  );
};

export default Tabs;

