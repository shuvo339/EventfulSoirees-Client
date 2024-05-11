import { useLoaderData } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet-async";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Bookings = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user} = UseAuth();
  const service = useLoaderData();
  const {
    _id,
    serviceName,
    imgURL,
    price,
    providerName,
    providerEmail,
    serviceArea
  } = service;

  const handleBooking=(e)=>{
    e.preventDefault();
    const form = e.target;
    const serviceId = _id;
    const serviceImage = imgURL;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const serviceDate = startDate;
    const instructions = form.instructions.value;
    const status = "Pending";
    const booking ={
      serviceId, serviceName, serviceImage, providerEmail, providerName, price, userEmail, userName, serviceDate, instructions, status, serviceArea
    }
    axios.post('http://localhost:5000/bookings', booking)
    .then(data=>{
      if(data.data.insertedId){
          Swal.fire({
                  title: "Purchased!",
                  text: "You have purchased successfully",
                  icon: "success"
                });
      }
      form.reset();
  })
    }
  return (
    <div className="my-10">
      <Helmet>
                <title>EventfulSoirees | Booking</title>
            </Helmet>
      <h2 className="text-4xl font-semibold text-center">Purchase Now!</h2>

      <form onSubmit={handleBooking}>
        <div className="grid md:grid-cols-2 gap-8 p-4">
          <div className="w-full">
            <label className="text-gray-700 font-semibold" htmlFor="serviceId">Service Id</label>
            <input name="serviceId" defaultValue={_id} disabled type="text"
              className="w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md  focus:border-emerald-400 focus:ring-emerald-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 font-semibold" htmlFor="serviceName">Service Name</label>
            <input name="serviceName" defaultValue={serviceName} disabled type="text"
              className="w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md  focus:border-emerald-400 focus:ring-emerald-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 font-semibold" htmlFor="serviceImage">Service Image</label>
            <input name="serviceImage" defaultValue={imgURL} disabled type="text"
              className="w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md  focus:border-emerald-400 focus:ring-emerald-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 font-semibold" htmlFor="providerEmail">Provider Email</label>
            <input name="providerEmail" defaultValue={providerEmail} disabled type="text"
              className="w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md  focus:border-emerald-400 focus:ring-emerald-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 font-semibold" htmlFor="providerName">Provider Name</label>
            <input name="providerName" defaultValue={providerName} disabled type="text"
              className="w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md  focus:border-emerald-400 focus:ring-emerald-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 font-semibold" htmlFor="userEmail">Current User Email</label>
            <input name="userEmail" defaultValue={user?.email} disabled type="text"
              className="w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md  focus:border-emerald-400 focus:ring-emerald-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 font-semibold" htmlFor="userName">Current User Name</label>
            <input name="userName" defaultValue={user?.displayName} disabled type="text"
              className="w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md  focus:border-emerald-400 focus:ring-emerald-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 font-semibold" htmlFor="serviceDate">Service Taking Date</label>
            <br />
            <DatePicker className="w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md  focus:border-emerald-400 focus:ring-emerald-300 focus:ring-opacity-40  focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className="w-full">
            <label className="text-gray-700 font-semibold" htmlFor="instructions">Special Instructions</label>
            <input name="instructions" placeholder="please write instructions here, if any?" type="text"
              className="w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md  focus:border-emerald-400 focus:ring-emerald-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 font-semibold" htmlFor="price">Price</label>
            <input name="price" defaultValue={price} disabled type="text"
              className="w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md  focus:border-emerald-400 focus:ring-emerald-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>

        </div>
        <div className="flex items-center justify-center mt-5">
        <button className="btn bg-emerald-400 md:w-1/2">Purchase</button>
        </div>
      </form>
    </div>
  );
};

export default Bookings;
