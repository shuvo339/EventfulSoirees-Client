import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const ServiceToDo = () => {
  const { user } = UseAuth();
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios(`http://localhost:5000/booked?email=${user?.email}`, {withCredentials:true})
    .then((data) => {
      setServices(data.data);
    });
  }, [user?.email]);

  const handleStatus = (id, status) => {
    axios
      .patch(`http://localhost:5000/bookings/${id}`, { status }, {withCredentials:true})
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          toast.success(`Status is being changed to ${status}`);
        }
      });
  };

  return (
    <div className="my-6">
        <Helmet>
                <title>EventfulSoirees | To-Do</title>
            </Helmet>
      <h2 className="text-3xl font-semibold text-center">
        My Booked Services List
      </h2>
      <div>
        <table className="table table-xs md:table-md lg:table-lg">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Service Name</th>
              <th>Service Area</th>
              <th>Price</th>
              <th>Service Taker</th>
              <th>Status</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {services?.map((service, idx) => (
              <tr
                key={service._id}
                className={`hover:bg-emerald-200 rounded-lg text-center my-2 ${
                  service.status === "Pending" && "text-blue-500 bg-blue-100/60"
                } ${
                  service.status === "Working" &&
                  "text-emerald-500 bg-emerald-100/60"
                } ${
                  service.status === "Completed" &&
                  "text-pink-500 bg-pink-100/60"
                } h-1 w-4`}
              >
                <td>{idx + 1}</td>
                <td>{service.serviceName}</td>
                <td>{service.serviceArea}</td>
                <td>${service.price}</td>
                <td>{service.userName}</td>
                <td>
                  <select
                    className="bg-transparent"
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
                {/* <td><Link to={`/details/${service._id}`}><button className="btn btn-xs sm:btn-sm md:btn-md">View Details</button></Link></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceToDo;
