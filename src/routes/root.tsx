import React from 'react';
import TerminalWrapper from '../components/terminalWrapper';


export default function Root({activeTab="Home"}) {
  return (
    <TerminalWrapper activeTab={activeTab}/>
  );
}
