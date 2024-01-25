import Banner from "../components/Banner";
import Events from "../components/Events";
import HomeMenu from "../components/HomeMenu";
import HomeNews from "../components/HomeNews";
import Workplace from "../components/Workplace";

const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeMenu/>
            <Workplace/>
            <Events/>
            <HomeNews/>
        </div>
    );
};

export default Home;