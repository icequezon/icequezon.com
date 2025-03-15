import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root activeTab="Home"/>
  },
  {
    path: "/about",
    element: <Root activeTab='About'/>
  },
  {
    path: "/resume",
    element: <Root activeTab='Resume'/>
  },
  {
    path: "/blog",
    element: <Root activeTab='Blog'/>
  },
  {
    path: "/contact",
    element: <Root activeTab='Contact'/>
  },
  {
    path: "/portfolio",
    element: <Root activeTab='Portfolio'/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
