import React from "react";
import { useTabs } from "../hooks/useTabs"; // Custom hook
import Tab from "./tab"; // Child component

const Tabs = () => {
  const { data: tabResponse, isLoading, error } = useTabs();
  const tabs = tabResponse?.data;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="nav-bar">
      {tabs?.map((tab) => (
        <Tab key={tab.id} tab={tab} />
      ))}
    </div>
  );
};

export default Tabs;

