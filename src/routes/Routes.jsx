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
          loader: ()=>fetch("http://localhost:5000/services")
        },
        {
          path: "/details/:id",
          element:<ServiceDetails></ServiceDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "/bookings/:id",
          element:<Bookings></Bookings>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
      ],
    },
  ]);