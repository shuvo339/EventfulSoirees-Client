import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
// import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const BookedServices = () => {
    const {user} = UseAuth();
    const [services, setServices]=useState([]);
    
    useEffect(()=>{
        axios(`https://b9-a11-eventful-soirees-server.vercel.app/bookings?email=${user?.email}`, {withCredentials:true})
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
            <Helmet>
                <title>EventfulSoirees | Booked</title>
            </Helmet>
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
                   <tr key={service._id} className={`hover:bg-emerald-200 rounded-lg text-center my-2 ${
                    service.status === 'Pending' &&
                    'text-blue-500 bg-blue-100/60'
                  } ${
                      service.status === 'Working' &&
                    'text-emerald-500 bg-emerald-100/60'
                  } ${
                      service.status === 'Completed' &&
                    'text-pink-500 bg-pink-100/60'
                  } h-1 w-4`}>
                       <td>{idx+1}</td>
                       <td>{service.serviceName}</td>
                       <td>{service.serviceArea}</td>
                       <td>${service.price}</td>
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