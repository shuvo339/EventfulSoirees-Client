import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Faqs from "../FAQ/Faqs";
import Highlights from "../Highlights/Highlights";
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
            <Highlights></Highlights>
            <Faqs></Faqs>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;