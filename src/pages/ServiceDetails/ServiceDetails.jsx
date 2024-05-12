import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import animationData from "../../assets/spinner.json";

const ServiceDetails = () => {
  const [service, setService]=useState({});
  const {id} = useParams();
  const [loading, setLoading]=useState(true);
  useEffect(()=>{
    axios(`https://b9-a11-eventful-soirees-server.vercel.app/services/${id}`, {withCredentials:true})
    .then(data=>{
      setService(data.data)
      setLoading(false)
    })
  }, [])
  const {
    _id,
    serviceName,
    serviceArea,
    imgURL,
    price,
    description,
    providerName,
    providerImage,
  } = service;

  if(loading){
    return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
}
  return (
    <div className="my-10">
           <Helmet>
                <title>EventfulSoirees | Details</title>
            </Helmet>
      <div className="flex flex-col justify-center items-center md:flex-row gap-3 md:gap-8">
        <span className="text-3xl">Service Provider:</span>
        <div className="flex flex-col items-center justify-center">
        <img className="rounded-lg" src={providerImage} alt="" />
        <h2 className="text-2xl">Name: {providerName}</h2>
        <p>Service Area: {serviceArea}</p>
        </div>
      </div>
        <div className="flex flex-col md:flex-row-reverse gap-3 md:gap-12 shadow-lg rounded-lg p-2 md:p-6 my-10">
      <img
        className="rounded-tl-[100px] md:w-1/2 rounded-br-[50px] border-4"
        src={imgURL}
        alt=""
      />
      <div className="space-y-3 flex flex-col md:w-1/2">
        <h2 className="text-3xl font-semibold">{serviceName}</h2>
        <p className="opacity-95 grow">{description}</p>
        <div className="flex gap-12">
          <p className="text-lg">
            <span className="opacity-85">Service Price: </span>
            <span className="font-semibold">${price}</span>
          </p>
          <p className="text-lg">
            <span className="opacity-85">Service Area: </span>
            <span className="font-semibold">{serviceArea}</span>
          </p>
        </div>
        <div className="flex gap-4 items-center py-2">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={providerImage} />
            </div>
          </div>
          <h2>
            <span className="opacity-85">Service Provider:</span> <br />
            <span className=" text-xl font-semibold">{providerName}</span>
          </h2>
        </div>
      <Link to={`/bookings/${_id}`}>
        <button className="btn bg-emerald-400 w-full mt-3">Book Now</button>
      </Link>
      </div>
    </div>
    </div>
  );
};

export default ServiceDetails;
