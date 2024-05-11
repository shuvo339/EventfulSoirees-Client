import Banner from "../Banner/Banner";
import Faqs from "../FAQ/Faqs";
import PopularServices from "../PopularServices/PopularServices";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EventfulSoirees | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;