import Container from "../Container/Container";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const InventorySoftware = () => {
    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])
    return (
        <div className="mb-8">
            <Container>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
                    <img src="https://i.ibb.co/TWWsfvr/inventory.webp" alt="" className="w-[500px] h-[500px]" />
                    <div className="space-y-8" data-aos="fade-down">

                    <h2 className="text-2xl md:text-5xl font-bold">What is <span className="text-sky-600">inventory management software?</span></h2>
                    <p className="tetx-base md:text-xl">Inventory management software, also known as stock management software, helps businesses deliver exceptional customer experiences by ensuring optimum inventory is always available. With the best stock management software in hand, businesses can eliminate error-prone manual tasks across all operations and enhance their overall supply chain, leading to better customer satisfaction and increased profitability.</p>
                    </div>

                </div>
                <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-12">
                    <img src="https://i.ibb.co/m4tpM9f/analytics.webp" alt="" className="w-[500px] h-[500px]"/>
                    <div className="space-y-8" data-aos="fade-up">
                        <h2 className="text-2xl md:text-5xl font-bold">Why do businesses need <span className="text-sky-600">inventory management software?</span></h2>
                        <p className="tetx-base md:text-xl">Inventory management software is an essential tool for businesses seeking to accelerate their growth, enhance customer service, and boost sales through streamlined inventory operations. Powerful free inventory software provides a comprehensive overview of inventory status, enabling businesses to manage fast-moving items while identifying and liquidating stagnant stock. Gofrugal's free inventory management software helps businesses confidently run their operations while catering to customer demands effectively.</p>
                    </div>
                </div>
                <div>

                </div>
            </Container>
            
        </div>
    );
};

export default InventorySoftware;