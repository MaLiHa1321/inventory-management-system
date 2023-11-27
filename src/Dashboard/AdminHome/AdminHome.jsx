import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hook/useAxiosPublic';
import { AiOutlineAlipayCircle, AiOutlineAreaChart, AiOutlineBarChart } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';

const AdminHome = () => {
    const [adminSale,setAdminSale] = useState({})
    const axiosSecure = useAxiosPublic()
    useEffect(()=>{
        axiosSecure.get('/admin-stat')
        .then(res => {
            setAdminSale(res.data)
        })
        .catch(err => console.log(err))
    },[])

    return (
        <div>
            <Helmet>
                <title>InventTech | AdminHome</title>
            </Helmet>
            <h2 className='text-2xl font-bold'>Welcome Home <span className='text-sky-600'> Admin!</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
             <h2 className="text-5xl text-center"><AiOutlineAreaChart></AiOutlineAreaChart></h2>
            <p className="text-xl font-bold">Total Income: {adminSale.totalIncome}</p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
          <h2 className="text-5xl text-center"><AiOutlineAlipayCircle></AiOutlineAlipayCircle></h2>
            <p className="text-xl font-bold">Total Product: {adminSale.product}</p>
          
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">

          <h2 className="text-5xl text-center"><AiOutlineBarChart></AiOutlineBarChart></h2>
            <p className="text-xl font-bold">Total Sales: {adminSale.sales} </p>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default AdminHome;