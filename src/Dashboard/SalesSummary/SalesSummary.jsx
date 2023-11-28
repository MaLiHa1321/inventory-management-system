import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { AiOutlineAlipayCircle, AiOutlineAreaChart, AiOutlineBarChart } from "react-icons/ai";
import SalesHistory from "./SalesHistory";
import { Helmet } from "react-helmet-async";


const SalesSummary = () => {
    const [sales,setSales] = useState({})
    const {user} = useAuth()
    const axiosSecure = useAxiosPublic();


    useEffect(()=>{
        axiosSecure.get(`/user-stat?email=${user?.email}`)
        .then(res =>{
            setSales(res.data)
        })
        .catch(err => console.log(err))
    },[])
   
    return (
        <div>
            <Helmet>
                <title>InventTech | sale Summary</title>
            </Helmet>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-78 bg-base-100 shadow-xl">
          <div className="card-body">
             <h2 className="text-5xl text-center"><AiOutlineAreaChart></AiOutlineAreaChart></h2>
            <p className="text-xl font-bold">Total Sale: {sales?.totalSale}</p>
          </div>
        </div>
        <div className="card w-78 bg-base-100 shadow-xl">
          <div className="card-body">
          <h2 className="text-5xl text-center"><AiOutlineAlipayCircle></AiOutlineAlipayCircle></h2>
            <p className="text-xl font-bold">Total Profit: {sales?.totalProfit}</p>
          
          </div>
        </div>
        <div className="card w-78 bg-base-100 shadow-xl">
          <div className="card-body">

          <h2 className="text-5xl text-center"><AiOutlineBarChart></AiOutlineBarChart></h2>
            <p className="text-xl font-bold">Total Investment: {sales?.totalInvest}</p>
          </div>
        </div>
      </div>
        
        <div className="mt-12">
            <SalesHistory></SalesHistory>
        </div>
       
            
        </div>
    );
};

export default SalesSummary;