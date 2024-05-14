import { useState } from "react";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {signIn, googleLogin} = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin=e=>{
      e.preventDefault();
      const form= e.target;
      const email = form.email.value;
      const password= form.password.value;
      signIn(email, password)
      .then(()=>{
        toast.success("You have logged in successfully")
        const user={email};
        axios.post('https://b9-a11-eventful-soirees-server.vercel.app/jwt', user, {withCredentials:true})
        .then(data=>{
          if(data.data.success){
              navigate(location?.state ? location.state : '/', {replace:true})
          }
        })
      })
      .catch(error=>{
        toast.error(error.message.split(":")[1])
     })
    }

    const handleGoogleLogin=()=>{
      googleLogin()
      .then((res)=>{
        toast.success("You have logged in successfully")
        axios.post('https://b9-a11-eventful-soirees-server.vercel.app/jwt', {email: res?.user?.email}, {withCredentials:true})
        .then(data=>{
          if(data.data.success){
              navigate(location?.state ? location.state : '/', {replace:true})
          }
        })
      })
      .catch(error=>{
        toast.error(error.message.split(":")[1])
     })
    }
 
    return (
        <div className="card shrink-0 w-3/4 md:w-1/2 mx-auto shadow-2xl bg-base-100 mt-8">
          <Helmet>
                <title>EventfulSoirees | Login</title>
            </Helmet>
          <h2 className="text-2xl md:text-4xl font-semibold text-center">Login</h2>
    <form onSubmit={handleLogin} className="card-body space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-bold">Password</span>
        </label>
        <div className="relative">
        <input
          type={showPassword? "text":"password"}
          name="password"
          placeholder="password"
          className="input input-bordered w-full"
        />
        <span className="absolute top-1/3 right-3 text-xl" onClick={()=>setShowPassword(!showPassword)}>{showPassword? <FaEye/>:<FaEyeSlash/>}</span>
        </div>
      </div>
      <div className="form-control mt-6">
          <button className="btn text-white text-lg font-semibold bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80">Login</button>
      </div>
    </form>
    <div className="flex justify-around my-2">
      {/* google  */}
    <button onClick={handleGoogleLogin} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
          <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
          <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
          </svg>
      Sign in with Google
      </button>
    </div>

    <p className="py-3 px-6">Do not have any account? Please <Link className="text-red-600 font-medium underline" to="/register">Register</Link></p>
  </div>
    );
};
export default Login;