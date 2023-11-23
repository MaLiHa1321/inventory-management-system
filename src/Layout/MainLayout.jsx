import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-8 min-h-[calc(100vh - 68px)]'>

            <Outlet></Outlet>
            </div>
             <Footer></Footer>
        </div>
    );
};

export default MainLayout;