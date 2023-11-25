import { AiFillAmazonCircle, AiFillBehanceCircle, AiFillBook } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const InventoryPage = () => {
    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])
    return (
        <div className="p-8 md:p-16 mt-8 mb-8 space-y-12  bg-slate-900 text-white">
            <h2 className="text-2xl md:text-5xl text-center font-bold">Keep your inventory in order</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
                <div className="text-2xl" data-aos="fade-up">
                    <h2 className="w-5 mx-auto text-5xl"><AiFillBook ></AiFillBook></h2>
                    <h2>Organize your products with images, categories, and prices.</h2>
                </div>
                <div className="text-2xl" data-aos="fade-down">
                    <h2 className="w-5 mx-auto text-5xl"><AiFillAmazonCircle></AiFillAmazonCircle></h2>
                    <h2>Auto-calculate the cost of each product sold by using first-in, first-out (FIFO).</h2>
                </div>
                <div className="text-2xl" data-aos="fade-up">
                <h2 className="w-5 mx-auto text-5xl"><AiFillBehanceCircle></AiFillBehanceCircle></h2> 
                    <h2>Run reports of bestselling items, total sales, and total taxes.</h2>
                </div>
            </div>
        </div>
    );
};

export default InventoryPage;