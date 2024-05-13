import Lottie from "lottie-react";
import animationData from "../../../assets/contactus.json";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { BiSolidMessageAltDetail } from "react-icons/bi";


const ContactUs = () => {
    const handleMessage = e => {
        e.preventDefault();
    }
    return (
        <div className="md:my-24 my-12 px-2">
            <h2 className="text-3xl md:text-5xl font-bold">Contact Us</h2>
            <h2 className="text-xl text-gray-400 font-bold pb-8">Get in touch for inquiries or to schedule a consultation</h2>
            <div className="flex flex-col md:flex-col-reverse lg:flex-row gap-4 lg:gap-12 rounded-lg">

                <div className="lg:w-1/2 w-full mt-2">
                    <form onSubmit={handleMessage} className="space-y-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow" placeholder="Username" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>

                        <textarea className="textarea textarea-bordered h-36 w-full" placeholder="Write your message"></textarea>
                        <br />

                        <button className="btn w-full bg-emerald-400 font-semibold">Send Message</button>
                    </form>
                </div>
                 <div className="lg:w-1/2 md:w-2/3 mx-auto w-full">
                    <div className="">
                        <Lottie className="" animationData={animationData} />
                    </div>
                </div>
                <div className="space-y-2 pl-10 md:pl-0 mt-4 md:mt-0">
                    <div className="flex gap-4 items-center py-2">
                        <FaPhoneSquareAlt className="text-4xl" />
                        <h2>
                            <span className="opacity-85">Phone:</span> <br />
                            <span className=" text-lg font-semibold">567-858-9533-0339</span>
                        </h2>
                    </div>
                    <div className="flex gap-4 items-center py-2">
                        <MdEmail className="text-4xl" />
                        <h2>
                            <span className="opacity-85">Email:</span> <br />
                            <span className=" text-lg font-semibold">support@eventfulsoirees.com</span>
                        </h2>
                    </div>
                    <div className="flex gap-4 items-center py-2">
                    <IoLocation className="text-5xl"/>
                        <h2>
                            <span className="opacity-85">Address:</span> <br />
                            <span className=" text-lg font-semibold">123 Main Street,
                                Suite 100,
                                Anytown, USA</span>
                        </h2>
                    </div>
                    <div className="flex gap-4 items-center py-2">
                        <BiSolidMessageAltDetail className="text-4xl" />
                        <h2>
                            <span className="opacity-85">Live Chat:</span> <br />
                            <span className=" text-lg font-semibold"><button className="btn">Let's Chat</button></span>
                        </h2>
                    </div>

                </div>
               
            </div>
        </div>
    );
};

export default ContactUs;