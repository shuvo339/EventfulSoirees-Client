import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    //   errorElement: <ErrorPage />,
    //   children: [
    //     {
    //       path: "/",
    //       element: <home/>,
    //     },
    //   ],
    },
  ]);