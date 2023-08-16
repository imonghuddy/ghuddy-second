import { createBrowserRouter } from "react-router-dom";

import Categories from "../components/categories/Categories";
import App from "../App";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Categories></Categories>
      },
    ],
  },
]);