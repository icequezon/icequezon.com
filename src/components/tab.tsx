import React from "react";
import { Tab } from "../types/tab"; // TypeScript type for Tab

interface TabProps {
  tab: Tab; // This will be the individual tab passed from the parent component
}

const TabComponent: React.FC<TabProps> = ({ tab }) => {
  return (
    <React.Fragment key={tab.name}>
      <a href={tab.url}>
      <span className="nav-item">{tab.name}</span>
      </a>
      <span className="nav-item">|</span>
    </React.Fragment>
  );
};

export default TabComponent;

