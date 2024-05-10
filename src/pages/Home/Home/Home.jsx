import Banner from "../Banner/Banner";
import Faqs from "../FAQ/Faqs";
import PopularServices from "../PopularServices/PopularServices";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;