import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hook/useAxiosPublic';
import { Link } from 'react-router-dom';
import { AiOutlineAlipay, AiOutlineMoneyCollect } from 'react-icons/ai';

const Payment = () => {
  const [card,setCard] = useState([])
  const axiosSecure = useAxiosPublic()
  useEffect(()=>{
       axiosSecure.get('/premium')
       .then(res => {
        setCard(res.data)
       })
       .catch(err => console.log(err))
  },[])

 
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-12'>
          {
            card.map((cards, idx) => <div key={idx + 1} className="card w-full bg-base-100 border-2 border-gray-300">
            <div className="card-body w-full">
            <h2 className='text-2xl flex justify-center items-center'><AiOutlineMoneyCollect></AiOutlineMoneyCollect></h2>
              <h2 className='text-2xl text-sky-600 font-bold'>Enterprise</h2>
              <p>{cards?.name}</p>
              <p className='text-2xl font-bold'>$ {cards?.amount}</p>
              <div className="card-actions justify-center">
                <Link to={`/dashboard/paymethod/${cards._id}`}>
                <button  className="btn btn-outline btn-success">Purchase</button>
                </Link>
              </div>
            </div>
          </div>)
          }

     
        </div>
    );
};

export default Payment;