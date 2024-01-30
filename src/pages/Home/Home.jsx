import Banner from "./Banner";
import Events from "./Events";
import HomeMenu from "./HomeMenu";
import HomeNews from "./HomeNews";
import Workplace from "./Workplace";

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