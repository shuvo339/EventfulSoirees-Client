import logo from '../../assets/logo.png'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border border-[#B8E0D2]">
        <div className="flex flex-col md:flex-row md:justify-around items-center justify-end text-center md:gap-0 gap-6 px-4 md:px-28 text-base-content">
            <div className='bg-[#B8E0D2] rounded-full size-72 px-32 flex justify-center items-center'>
            <aside className="flex items-center justify-center flex-col">
               
               <img className='w-full' src={logo} alt="" />
              
               <p className='text-center opacity-90'>Providing reliable services since 2020</p>
           
            <div className="grid grid-flow-col gap-8 items-center justify-center mt-6">
                    <a className='cursor-pointer'><FaLinkedin  className='text-3xl text-[#0a66c2]'/></a>
                    <a className='cursor-pointer'><FaTwitter className='text-3xl text-[#1DA1F2]'/></a>
                    <a className='cursor-pointer'><FaFacebook className='text-3xl text-[#1877F2]'/></a>
            </div>
            </aside>
            </div>
            <nav className='flex flex-col justify-center items-center gap-2'>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Customer Service</a>
                <a className="link link-hover">24/7 Support</a>
                <a className="link link-hover">Guidelines</a>
            </nav>
            <nav className='flex flex-col justify-center items-center gap-2'>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">About</a>
            </nav>
            <nav className='flex flex-col  gap-2'>
            <div className="flex gap-4 items-center py-2">
                        <FaPhoneSquareAlt className="text-4xl" />
                        <h2>
                           
                            <span className=" text-lg font-semibold">567-858-9533-0339</span>
                        </h2>
                    </div>
                    <div className="flex gap-4 items-center py-2">
                        <MdEmail className="text-4xl" />
                        <h2>
                           
                            <span className=" text-lg font-semibold">support@eventfulsoirees.com</span>
                        </h2>
                    </div>
            </nav>
            
        </div>
        <div className="px-10 py-4 border-t border-[#B8E0D2] bg-[#B8E0D2]">
            <nav className="flex flex-col justify-center items-center ">
                
                <p className="text-center">Copyright © 2024 - All right reserved by Eventful Soirees</p>
            </nav>
        </div>
    </footer>
    );
};

export default Footer;