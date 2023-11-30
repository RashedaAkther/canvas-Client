import Banner from "./Banner";
import Contract from "./Contract";
import HotDeals from "./HotDeals";
import Review from "./Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HotDeals></HotDeals>
            <Review></Review>
            <Contract></Contract>
        </div>
    );
};

export default Home;