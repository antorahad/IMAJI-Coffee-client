import Banner from "../components/Banner";
import Events from "../components/Events";
import HomeMenu from "../components/HomeMenu";
import Workplace from "../components/Workplace";

const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeMenu/>
            <Workplace/>
            <Events/>
        </div>
    );
};

export default Home;