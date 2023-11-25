import { AiFillBook, AiOutlineAccountBook, AiOutlineBarChart, AiOutlineSetting } from "react-icons/ai";
import Container from "../Container/Container";


const TrackPage = () => {
    return (
        <div className="mb-7 w-full">
            {/* <Container> */}

            <div className="hero min-h-[450px] bg-sky-100 ">
  <div className="hero-content text-center">
    <div className="md:p-8 space-y-8">
      <h1 className="text-2xl md:text-5xl font-bold">Track 4 types of items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white text-black shadow-xl p-5 rounded-lg hover:border-2  hover:border-green-700">
                <h2 className="text-4xl w-5 mx-auto"><AiFillBook></AiFillBook></h2>
                <h1 className="text-xl md:text-2xl font-bold mb-5">Inventory items</h1>
                <p>hese are the items you buy and/or sell and track quantities such as packing materials or finished goods like jewelry.</p>
            </div>
            <div className="bg-white text-black shadow-xl p-5 rounded-lg hover:border-2  hover:border-green-700">
            <h2 className="text-4xl w-5 mx-auto"><AiOutlineAccountBook></AiOutlineAccountBook></h2>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Non-inventory items</h2>
                <p>These are the items you buy and/or sell but don't track quantities of such as nuts and bolts for installation projects or finished pieces of furniture and hardware.</p>
            </div>
            <div className="bg-white text-black shadow-xl p-5 rounded-lg hover:border-2  hover:border-green-700">
            <h2 className="text-4xl w-5 mx-auto"><AiOutlineSetting></AiOutlineSetting></h2>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Services</h3>
                <p>These are services you provide to your customers such as landscaping or tax preparation.</p>
            </div>
            <div className="bg-white text-black shadow-xl p-5 rounded-lg hover:border-2  hover:border-green-700">
            <h2 className="text-4xl w-5 mx-auto"><AiOutlineBarChart></AiOutlineBarChart></h2>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Bundles</h2>
                <p>Bundles are a collection of products and/or services that you offer together such as a fixed-price meal at a restaurant or sunscreen and sandals sold together as part of a beach kit.</p>
            </div>
            <div className="bg-white text-black shadow-xl p-5 rounded-lg hover:border-2  hover:border-green-700">
            <h2 className="text-4xl w-5 mx-auto"><AiOutlineSetting></AiOutlineSetting></h2>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Services</h3>
                <p>These are services you provide to your customers such as landscaping or tax preparation.</p>
            </div>
            <div className="bg-white text-black shadow-xl p-5 rounded-lg hover:border-2  hover:border-green-700">
            <h2 className="text-4xl w-5 mx-auto"><AiOutlineBarChart></AiOutlineBarChart></h2>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Bundles</h2>
                <p>Bundles are a collection of products and/or services that you offer together such as a fixed-price meal at a restaurant or sunscreen and sandals sold together as part of a beach kit.</p>
            </div>
        </div>
    </div>
  </div>
</div>
            {/* </Container> */}
     
            
        </div>
    );
};

export default TrackPage;