import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Root from "./routes/root";
import constants from "./constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root tabs={constants.tabs} activeTab="Home"/>
  },
  {
    path: "/about",
    element: <Root tabs={constants.tabs} activeTab='About'/>
  },
  {
    path: "/resume",
    element: <Root tabs={constants.tabs} activeTab='Resume'/>
  },
  {
    path: "/blog",
    element: <Root tabs={constants.tabs} activeTab='Blog'/>
  },
  {
    path: "/contact",
    element: <Root tabs={constants.tabs} activeTab='Contact'/>
  },
  {
    path: "/portfolio",
    element: <Root tabs={constants.tabs} activeTab='Portfolio'/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
