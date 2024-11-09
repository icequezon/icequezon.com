import React from 'react';
import Terminal from '../components/terminal';


export default function Root({tabs=[{}], activeTab="Home"}) {
  return (
    <Terminal tabs={tabs} activeTab={activeTab}/>
  );
}
