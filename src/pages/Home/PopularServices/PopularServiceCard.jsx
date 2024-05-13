import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

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
    <Fade>
    <div className="flex md:flex-row flex-col gap-4 md:gap-12 shadow-lg rounded-lg p-2 rounded-tl-[100px] rounded-br-[50px] bg-blue-50">
      <img
        className="rounded-tl-[100px] md:w-1/2 rounded-br-[50px] object-cover h-80 border-4"
        src={imgURL}
        alt=""
      />
      <div className="md:w-1/2 space-y-1 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold">{serviceName}</h2>
        <p className="opacity-95 min-h-16 text-center">{description}</p>
       <div className="px-3 py-2 bg-blue-100 rounded-full my-2">
       <p className="text-lg text-emerald-600 font-semibold"><span className="opacity-80">Price:</span> ${price}</p>
       </div>
        <div className="flex gap-4 items-center py-2">
        <span className="opacity-85">Service Provider:</span> 
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-[#9ACCC9] ring-offset-base-100 ring-offset-2">
              <img src={providerImage} />
            </div>
          </div>
          <h2><span className=" text-xl font-semibold">{providerName}</span></h2>
        </div>
   
       <Link to={`/details/${_id}`} className="w-full mx-auto flex justify-center items-center"><button className="mt-1 btn bg-[#9ACCC9] w-full md:w-1/2">View Details</button></Link>
       
      </div>
    </div>
    </Fade>
  );
};

export default PopularServiceCard;
