import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto px-2">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;