import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import ManageServiceCard from "./ManageServiceCard";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import animationData from "../../assets/spinner.json";

const ManageService = () => {
    const {user} = UseAuth();
    const [services, setServices]=useState([]);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        axios(`https://b9-a11-eventful-soirees-server.vercel.app/services?email=${user?.email}`)
        .then(data=>{
            setServices(data.data)
            setLoading(false)
        })
    }, [user?.email])

    if(loading){
        return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
    }
    return (
        <div className="my-8">
            <Helmet>
                <title>EventfulSoirees | Manage</title>
            </Helmet>
            <div className="h-20 bg-blue-100 flex justify-center items-center">
            <h2 className="text-3xl font-semibold">My Services</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 mt-8">
                {
                    services?.map(service=><ManageServiceCard key={service._id} services={services} setServices={setServices} service={service}></ManageServiceCard>)
                }
            </div>
        </div>
    );
};

export default ManageService;