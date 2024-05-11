import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateService = () => {
    const service = useLoaderData();
    const {
        _id,
        serviceName,
        serviceArea,
        imgURL,
        price,
        description,
      } = service;

      const handleUpdateService=(e)=>{
        e.preventDefault();
        const form = e.target;
        const serviceName = form.service_name.value; 
        const serviceArea = form.service_area.value; 
        const imgURL = form.image.value; 
        const price = form.price.value; 
        const description = form.description.value; 
        const service = {
            serviceName, serviceArea, imgURL, price, description
        }
        axios.put(`https://b9-a11-eventful-soirees-server.vercel.app/services/${_id}`, service)
        .then(data=>{
            if(data.data.modifiedCount>0){
                Swal.fire({
                        title: "Updated!",
                        text: "Service has been updated",
                        icon: "success"
                      });
            }
            form.reset();
        })
    }
    return (
        <div className="mb-6">
            <Helmet>
                <title>EventfulSoirees | Update</title>
            </Helmet>
        <div className="bg-emerald-500 bg-blend-overlay bg-opacity-15 w-full md:w-3/5 lg:w-3/5 shadow-2xl mx-auto mt-8 p-6 md:p-10 rounded-md ">
            <h2 className="text-4xl font-bold mx-auto w-full text-center pb-6 bg-gradient-to-r from-stone-700 to-stone-400 inline-block text-transparent bg-clip-text">Update Service</h2>
            <form onSubmit={handleUpdateService} className="w-full">
            
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Service Name</span>
                    </label>
                    <input type="text"  placeholder="service name" defaultValue={serviceName} name="service_name" className="input input-bordered bg-opacity-80" required />
                </div>
             

               <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Service Area</span>
                    </label>
                    <input type="text" placeholder="service area" defaultValue={serviceArea} name="service_area" className="input input-bordered bg-opacity-80" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Image URL</span>
                    </label>
                    <input type="text"  placeholder="image url" name="image" defaultValue={imgURL} className="input input-bordered bg-opacity-80" required />
                </div>
             

               <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Price</span>
                    </label>
                    <input type="text" placeholder="price" name="price" defaultValue={price} className="input input-bordered bg-opacity-80" required />
                </div>
            
               <div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Short Description</span>
                    </label>
                    <textarea type="text"  placeholder="short description" defaultValue={description} name="description" className="input input-bordered bg-opacity-80 h-20 text-area py-2" required />
                </div>
               </div>
                <div className="form-control mt-6">
                    <button className="btn bg-black text-white bg-opacity-75">UPDATE SERVICE</button>
                </div>
            </form>
        </div>
    </div>
);
};

export default UpdateService;