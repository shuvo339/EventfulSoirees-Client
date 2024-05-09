import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto px-2">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;