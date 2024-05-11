import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";

const AllServices = () => {
    const [services, setServices] = useState([]);
    const [search, setSearch]=useState('');
    useEffect(()=>{
        axios(`http://localhost:5000/all-services?search=${search}`)
        .then(data=>{
            setServices(data.data)
        })
    }, [search])
    const handleSearch=e=>{
        e.preventDefault();
        const text= e.target.search.value;
        setSearch(text);

    }
    return (
        <div className="my-10">
            <Helmet>
                <title>EventfulSoirees | Services</title>
            </Helmet>
            <form onSubmit={handleSearch}>
            <div className="w-1/3 mb-6 mx-auto">
                <label className="input input-bordered flex items-center gap-2">
                <input type="text" name="search" className="grow" placeholder="Search" />
                <button className="btn btn-sm px-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                </label>
            </div>
            </form>

            <div className="grid md:grid-cols-2 gap-4">
                {
                     services?.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;