import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageServiceCard = ({service, services, setServices}) => {
    const {
        _id,
        serviceName,
        serviceArea,
        imgURL,
        price,
        description,
      } = service;

      const handleDelete=id=>{Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:5000/services/${id}`)
            .then(data=>{
                if(data.data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    const remaining = services?.filter(service=>service._id !== id);
                    setServices(remaining)
    
                }
            })
        }
      });
    }
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
      </div>
       <div className="flex justify-around items-center mt-3 w-full">
       <Link className="w-1/3" to={`/update/${_id}`}><button className="btn bg-emerald-400 w-full">Edit</button></Link>
        <button onClick={()=>handleDelete(_id)} className="btn bg-red-400 w-1/3">Delete</button>
       </div>
      </div>
    );
  };

export default ManageServiceCard;