import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Errorpage from "../pages/ErrorPage/Errorpage";
import Home from "../pages/Home/Home";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Errorpage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);