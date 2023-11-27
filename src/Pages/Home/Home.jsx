import { Helmet } from "react-helmet-async";
import AboutPage from "./AboutPage/AboutPage";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import InventoryPage from "./InventoryPage/InventoryPage";
import InventorySoftware from "./InventorySoftware/InventorySoftware";
import TrackPage from "./TrackPage/TrackPage";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>InventTech | Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutPage></AboutPage>
            <InventoryPage></InventoryPage>
            <InventorySoftware></InventorySoftware>
            <Contact></Contact>
            <TrackPage></TrackPage>
        </div>
    );
};

export default Home;