import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Errorpage from "../pages/ErrorPage/Errorpage";
import Home from "../pages/Home/Home";
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import AddService from "../pages/AddService/AddService";

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
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/add",
          element: <PrivateRoute><AddService></AddService></PrivateRoute>,
        },
      ],
    },
  ]);