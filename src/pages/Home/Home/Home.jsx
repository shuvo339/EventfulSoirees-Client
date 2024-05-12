import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
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
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;