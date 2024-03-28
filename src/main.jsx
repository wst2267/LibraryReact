import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import History from "./components/History/History.jsx";
import Selection from './components/Selection/Selection.jsx'
import ReaderArea from './components/ReaderArea/ReaderArea.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/select/:name",
    element: <Selection />,
  },
  {
    path: "/reader/:name",
    element: <ReaderArea />,
  },
  {
    path: "/history",
    element: <History />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
