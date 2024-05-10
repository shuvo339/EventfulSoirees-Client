import { Link } from "react-router-dom";

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
    <div className="p-4 rounded-md shadow-md border space-y-3">
      <img className="rounded-lg h-80 w-full" src={imgURL} alt="" />
    <div className="space-y-3 flex flex-col">
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
    </div>
      <Link to={`/details/${_id}`}><button className="btn bg-emerald-400 w-full mt-3">View Details</button></Link>
    </div>
  );
};

export default ServiceCard;
