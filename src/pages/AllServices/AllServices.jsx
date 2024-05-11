import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const AllServices = () => {
    const services = useLoaderData();
    const [search, setSearch]=useState('');
    
    return (
        <div className="my-10">
            <Helmet>
                <title>EventfulSoirees | Services</title>
            </Helmet>
            <div className="w-1/3 mb-6 mx-auto">
                <label className="input input-bordered flex items-center gap-2">
                <input type="text" name="search" className="grow" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {
                     services?.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;