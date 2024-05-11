import Swal from "sweetalert2";
import axios from "axios";
import UseAuth from "../../hooks/UseAuth";
import { Helmet } from "react-helmet-async";

const AddService = () => {
    const {user}=UseAuth();
    const providerName = user?.displayName;
    const providerEmail = user?.email;
    const providerImage = user?.photoURL;
    const handleAddService=(e)=>{
        e.preventDefault();
        const form = e.target;
        const serviceName = form.service_name.value; 
        const serviceArea = form.service_area.value; 
        const imgURL = form.image.value; 
        const price = form.price.value; 
        const description = form.description.value; 
        const service = {
            serviceName, serviceArea, imgURL, price, description, providerName, providerImage, providerEmail
        }
    console.log(service);
        axios.post('https://b9-a11-eventful-soirees-server.vercel.app/services', service)
        .then(data=>{
            if(data.data.insertedId){
                Swal.fire({
                        title: "Added!",
                        text: "A new service has been added",
                        icon: "success"
                      });
            }
            form.reset();
        })
    }
    return (
         <div className="mb-6">
            <Helmet>
                <title>EventfulSoirees | Add</title>
            </Helmet>
            <div style={{backgroundImage: `url("https://i.ibb.co/C8pQ9CT/add-bg.jpg")`}} className="bg-black bg-blend-overlay bg-opacity-60 w-full md:w-3/5 lg:w-3/5 shadow-2xl mx-auto mt-8 p-6 md:p-10 rounded-md ">
                <h2 className="text-4xl font-bold mx-auto w-full text-center pb-6 bg-gradient-to-r from-stone-700 via-slate-100 to-stone-400 inline-block text-transparent bg-clip-text">Add New Service</h2>
                <form onSubmit={handleAddService} className="w-full">
                
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Service Name</span>
                        </label>
                        <input type="text"  placeholder="service name" name="service_name" className="input input-bordered bg-opacity-80" required />
                    </div>
                 

                   <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Service Area</span>
                        </label>
                        <input type="text" placeholder="service area" name="service_area" className="input input-bordered bg-opacity-80" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Image URL</span>
                        </label>
                        <input type="text"  placeholder="image url" name="image" className="input input-bordered bg-opacity-80" required />
                    </div>
                 

                   <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Price</span>
                        </label>
                        <input type="text" placeholder="price" name="price" className="input input-bordered bg-opacity-80" required />
                    </div>
                
                   <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Short Description</span>
                        </label>
                        <textarea type="text"  placeholder="short description" name="description" className="input input-bordered bg-opacity-80 h-20 text-area py-2" required />
                    </div>
                   </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white bg-opacity-75">ADD NEW SERVICE</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default AddService;