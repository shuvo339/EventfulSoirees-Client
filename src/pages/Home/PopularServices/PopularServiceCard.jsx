import { Link } from "react-router-dom";

const PopularServiceCard = ({ service }) => {
  const {
    _id,
    serviceName,
    imgURL,
    price,
    description,
    providerName,
    providerImage,
  } = service;
  return (
    <div className="flex md:flex-row flex-col gap-4 md:gap-12 shadow-lg rounded-lg p-4">
      <img
        className="rounded-tl-[100px] md:w-1/2 rounded-br-[50px] object-cover h-72 border-4"
        src={imgURL}
        alt=""
      />
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-semibold">{serviceName}</h2>
        <p className="opacity-95 min-h-16">{description}</p>
        <p className="text-xl"><span className="opacity-85">Service Price: </span> <span className="font-semibold">${price}</span></p>
        <div className="flex gap-4 items-center py-2">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={providerImage} />
            </div>
          </div>
          <h2><span className="opacity-85">Service Provider</span> <br /><span className=" text-xl font-semibold">{providerName}</span></h2>
        </div>
        <Link to={`/details/${_id}`}><button className="mt-3 btn bg-emerald-400 w-full md:w-1/2">View Details</button></Link>
      </div>
    </div>
  );
};

export default PopularServiceCard;
