import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

const BookedServices = () => {
    const {user} = UseAuth();
    const [services, setServices]=useState([]);
    
    useEffect(()=>{
        axios(`http://localhost:5000/bookings?email=${user?.email}`)
        .then(data=>{
            setServices(data.data)
        })
    }, [user?.email])
    // if(services.length<1){
    //     console.log(services.length)
    //     Swal.fire({
    //         text: "You do not have any booked service",
    //         icon: "error"
    //       });
    // }
    return (
        <div className="my-6">
            <h2 className="text-3xl font-semibold text-center">My Booked Services List</h2>
            <div>
            <table className="table table-xs md:table-md lg:table-lg">
               {/* head */}
               <thead>
                   <tr>
                       <th>SL</th>
                       <th>Service Name</th>
                       <th>Service Area</th>
                       <th>Price</th>
                       <th>Service Provider</th>
                       <th>Status</th>
                       {/* <th>Action</th> */}
                   </tr>
               </thead>
               <tbody>
   {
       services.map((service, idx)=>
                   <tr key={service._id} className="hover">
                       <td>{idx+1}</td>
                       <td>{service.serviceName}</td>
                       <td>{service.serviceArea}</td>
                       <td>{service.price}</td>
                       <td>{service.providerName}</td>
                       <td>{service.status}</td>
                       {/* <td><Link to={`/details/${service._id}`}><button className="btn btn-xs sm:btn-sm md:btn-md">View Details</button></Link></td> */}
                   </tr>)
          
   }
   </tbody>
           </table>
            </div>
        </div>
    );
};

export default BookedServices;