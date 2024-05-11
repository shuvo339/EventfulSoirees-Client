import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import ManageServiceCard from "./ManageServiceCard";

const ManageService = () => {
    const {user} = UseAuth();
    const [services, setServices]=useState([]);
    useEffect(()=>{
        axios(`http://localhost:5000/services?email=${user?.email}`)
        .then(data=>{
            setServices(data.data)
        })
    }, [user?.email])
    return (
        <div className="my-10">
            <h2 className="text-3xl font-semibold text-center">My Services</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
                {
                    services?.map(service=><ManageServiceCard key={service._id} services={services} setServices={setServices} service={service}></ManageServiceCard>)
                }
            </div>
        </div>
    );
};

export default ManageService;