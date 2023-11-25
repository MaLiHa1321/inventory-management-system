import AboutPage from "./AboutPage/AboutPage";
import Banner from "./Banner/Banner";
import InventoryPage from "./InventoryPage/InventoryPage";
import TrackPage from "./TrackPage/TrackPage";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutPage></AboutPage>
            <InventoryPage></InventoryPage>
            <TrackPage></TrackPage>
        </div>
    );
};

export default Home;