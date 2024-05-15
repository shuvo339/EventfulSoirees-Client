import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import animationData from "../../assets/spinner.json";

const AllServices = () => {
    const [services, setServices] = useState([]);
    const [count, setCount] = useState(0);
    const [search, setSearch]=useState('');
    const [loading, setLoading]=useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
  
    const url =`https://b9-a11-eventful-soirees-server.vercel.app/all-services?search=${search}&page=${currentPage}&size=${itemsPerPage}`;
    useEffect(()=>{
        axios(url)
        .then(data=>{
            setServices(data.data)
            setLoading(false)
        })
    }, [search, currentPage, url])


    useEffect(() => {
        const getCount = async () => {
          const { data } = await axios(
            `https://b9-a11-eventful-soirees-server.vercel.app/servicecount?search=${search}`
          )
    
          setCount(data.count)
          setCurrentPage(1)
        }
        getCount()
      }, [search])


    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(p=>p+1);

    const handleSearch=e=>{
        e.preventDefault();
        const text= e.target.search.value;
        setSearch(text);
        setCurrentPage(0)
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    if(loading){
        return <Lottie className="w-48 mx-auto mt-16" animationData={animationData} />
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

            <div className="space-y-10">
                {
                     services?.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
                <div className="flex justify-center items-center mt-10">
            <button onClick={handlePrev} className="btn mr-2 bg-slate-300 btn-sm">Prev</button>
                {
                    pages.map(page => <button onClick={() => setCurrentPage(page)} className={currentPage === page ? 'bg-[#9ACCC9] btn text-white mr-2 btn-sm' : 'btn bg-gray-800 mr-2 text-white btn-sm'} key={page}>{page}</button>)
                }
                <button onClick={handleNext} className="btn ml-2 bg-slate-300 btn-sm">Next</button>
                </div>
        </div>
    );
};

export default AllServices;