import axios from "axios";
import { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../../assets/spinner.json";

const PopularServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        axios('https://b9-a11-eventful-soirees-server.vercel.app/services')
        .then(data=>{
            setServices(data.data)
            setLoading(false)
        })
    }, [])
    if(loading){
        return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
    }
    return (
        <div className="md:mt-24 mt-12">
            <h2 className="text-3xl md:text-5xl font-bold">Popular Services</h2>
            <h2 className="text-xl text-gray-400 font-bold pb-4">Explore Our Most Popular Service</h2>
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