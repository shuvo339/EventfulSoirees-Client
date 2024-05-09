import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const UseAuth = () => {
        const allvalues = useContext(AuthContext);
        return allvalues;
};

export default UseAuth;