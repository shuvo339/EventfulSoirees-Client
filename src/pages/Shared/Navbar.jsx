import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" bg-[#B8E0D2]">
           <div className="navbar max-w-6xl mx-auto">
           <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48">
                <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-md font-semibold underline':'px-3 py-2 rounded-md'} to="/">Services</NavLink></li>
                    <li>
                    <a>Dashboard</a>
                    <ul className="p-2">
                    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-md font-semibold underline':'px-3 py-2 rounded-md'} to="/add">Add Service</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-md font-semibold underline':'px-3 py-2 rounded-md'} to="/manage">Manage Service</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-md font-semibold underline':'px-3 py-2 rounded-md'} to="/booked">Booked-Services</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-md font-semibold underline':'px-3 py-2 rounded-md'} to="/todo">Service-To-Do</NavLink></li>
                    </ul>
                    </li>
                </ul>
                </div>
                <Link to="/" className="font-bold text-xl">Eventful Soirees</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">
                <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-md font-semibold underline mr-2':'px-3 py-2 rounded-md mr-2 font-medium'} to="/services">Services</NavLink></li>
                <li>
                    <details>
                    <summary className="font-medium">Dashboard</summary>
                    <ul className="p-2 w-48">
                    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-md font-semibold underline':'px-3 py-2 rounded-md'} to="/add">Add Service</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-md font-semibold underline':'px-3 py-2 rounded-md'} to="/manage">Manage Service</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-md font-semibold underline':'px-3 py-2 rounded-md'} to="/booked">Booked-Services</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-md font-semibold underline':'px-3 py-2 rounded-md'} to="/todo">Service-To-Do</NavLink></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/register" className="btn">Register</Link>
            </div>
           </div>
        </div>
    );
};

export default Navbar;