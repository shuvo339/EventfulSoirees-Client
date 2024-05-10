import axios from "axios";
import { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";
import { Link } from "react-router-dom";

const PopularServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        axios('http://localhost:5000/services')
        .then(data=>{
            setServices(data.data)
        })
    }, [])

    return (
        <div className="mt-20">
            <h2 className="text-4xl font-bold">Popular Services</h2>
            <div className="grid grid-cols-1 gap-6">
                {
                    services?.slice(0,6).map(service=><PopularServiceCard key={service._id} service={service}></PopularServiceCard>)
                }
            </div>

            <div className="flex justify-center items-center mt-8">
                <Link to="/services"><button className="btn bg-emerald-500 w-full font-semibold text-lg ">Show All</button></Link>
            </div>
        </div>
    );
};

export default PopularServices;