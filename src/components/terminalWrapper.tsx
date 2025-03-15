import React from "react";
import { useTabs } from "../hooks/useTabs"; // Custom Hook
import Terminal from "./terminal"; // Your Class Component

const TerminalWrapper = ({activeTab="Home"}) => {
  const { data: tabResponse, isLoading, error } = useTabs();
  const tabs = tabResponse?.data || [];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <Terminal tabs={tabs} activeTab={activeTab}/>;
};

export default TerminalWrapper;

