import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Errorpage from "../pages/ErrorPage/Errorpage";
import Home from "../pages/Home/Home/Home";
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import AddService from "../pages/AddService/AddService";
import AllServices from "../pages/AllServices/AllServices";
import ServiceDetails from './../pages/ServiceDetails/ServiceDetails';
import Bookings from './../pages/Bookings/Bookings';
import ManageService from './../pages/ManageService/ManageService';
import UpdateService from './../pages/UpdateService/UpdateService';
import BookedServices from './../pages/BookedServices/BookedServices';
import ServiceToDo from './../pages/ServiceToDo/ServiceToDo';

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
        {
          path: "/services",
          element:<AllServices></AllServices>,
        },
        {
          path: "/details/:id",
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        },
        {
          path: "/bookings/:id",
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>,
        },
        {
          path: "/manage",
          element:<PrivateRoute><ManageService></ManageService></PrivateRoute>,
        },
        {
          path: "/todo",
          element:<PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>,
        },
        {
          path: "/booked-service",
          element:<PrivateRoute><BookedServices></BookedServices></PrivateRoute>,
        },
        {
          path: "/update/:id",
          element:<PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
        },
      ],
    },
  ]);