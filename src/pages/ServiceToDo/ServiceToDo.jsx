import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import animationData from "../../assets/spinner.json";

const ServiceToDo = () => {
  const { user } = UseAuth();
  const [services, setServices] = useState([]);
  const [loading, setLoading]=useState(true);

  useEffect(() => {
    getdata()
  }, [user]);

  const getdata = async()=>{
    const {data} = await axios(`https://b9-a11-eventful-soirees-server.vercel.app/booked?email=${user?.email}`, {withCredentials:true})
      setServices(data);
      setLoading(false)  
  }

  const handleStatus = (id, status) => {
   axios.patch(`https://b9-a11-eventful-soirees-server.vercel.app/bookings/${id}`, { status }, {withCredentials:true})
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success(`Status is being changed to ${status}`);
          getdata();
        }
      });
  };
  if(loading){
    return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
}

  return (
    <div className="my-8">
        <Helmet>
                <title>EventfulSoirees | To-Do</title>
            </Helmet>
            <div className="h-20 bg-blue-100 flex justify-center items-center">
            <h2 className="text-3xl font-semibold">My Services To-Do List</h2>
            </div>
      <div className="mt-8 min-h-60">
      {
          services.length < 1 && <h2 className="text-center text-2xl font-semibold my-6  text-red-500 ">You have not booked any service yet!</h2>
      }
       <div className="overflow-x-auto">
        <table className="table table-xs md:table-md lg:table-lg">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Service Name</th>
              <th>Service Area</th>
              <th>Price</th>
              <th>Service Taker</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
            services?.map((service, idx) => (
              <tr
                key={service._id}
                className={`hover:bg-emerald-100 rounded-lg text-center my-2 ${
                  service.status === "Pending" && "text-amber-600 bg-amber-50"
                } ${
                  service.status === "Working" &&
                  "text-emerald-600 bg-emerald-50"
                } ${
                  service.status === "Completed" &&
                  "text-pink-600 bg-pink-50"
                } h-1 w-4`}
              >
                <td>{idx + 1}</td>
                <td>{service.serviceName}</td>
                <td>{service.serviceArea}</td>
                <td>${service.price}</td>
                <td>{service.userName}</td>
                <td>{new Date(service.serviceDate).toLocaleString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' })}</td>
                <td>
                  <select
                    className="bg-transparent outline-0"
                    value={service.status}
                    onChange={(e) => handleStatus(service._id, e.target.value)}
                    name="status"
                    id="status"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Working">Working</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceToDo;
