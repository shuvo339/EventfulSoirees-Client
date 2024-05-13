import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ServiceCard = ({ service }) => {
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
  return (
    <Fade>
    <div className=" rounded-md flex flex-col md:flex-row-reverse gap-4 md:gap-8 shadow-md space-y-3 border border-opacity-70 border-[#9ACCC9]">
      <div className="md:w-1/2">
      <img className="h-80 w-full object-cover" src={imgURL} alt="" />
      </div>
    <div className="space-y-3 md:w-1/2 flex flex-col px-4">
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
      <div className="flex gap-4 items-center">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-[#9ACCC9] ring-offset-base-100 ring-offset-2">
            <img src={providerImage} />
          </div>
        </div>
        <h2>
          <span className="opacity-85">Service Provider:</span> <br />
          <span className=" text-xl font-semibold">{providerName}</span>
        </h2>
      </div>
       <Link to={`/details/${_id}`}><button className="btn bg-[#9ACCC9] w-full mt-3">View Details</button></Link>
    </div>
     
    </div>
    </Fade>
  );
};

export default ServiceCard;
