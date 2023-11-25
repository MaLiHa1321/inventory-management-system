import { AiFillAmazonCircle, AiFillBehanceCircle, AiFillBook } from "react-icons/ai";


const InventoryPage = () => {
    return (
        <div className="p-16 mt-8 mb-8 space-y-12  bg-slate-900 text-white">
            <h2 className="text-2xl md:text-5xl text-center font-bold">Keep your inventory in order</h2>
            <div className="flex md:flex-row gap-12 ">
                <div className="text-2xl">
                    <h2 className="w-5 mx-auto text-3xl"><AiFillBook ></AiFillBook></h2>
                    <h2>Organize your products with images, categories, and prices.</h2>
                </div>
                <div className="text-2xl">
                    <h2 className="w-5 mx-auto text-3xl"><AiFillAmazonCircle></AiFillAmazonCircle></h2>
                    <h2>Auto-calculate the cost of each product sold by using first-in, first-out (FIFO).</h2>
                </div>
                <div className="text-2xl">
                <h2 className="w-5 mx-auto text-3xl"><AiFillBehanceCircle></AiFillBehanceCircle></h2> 
                    <h2>Run reports of bestselling items, total sales, and total taxes.</h2>
                </div>
            </div>
        </div>
    );
};

export default InventoryPage;