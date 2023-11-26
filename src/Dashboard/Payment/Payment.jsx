import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hook/useAxiosPublic';
import { Link } from 'react-router-dom';

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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {
            card.map((cards, idx) => <div key={idx + 1} className="card w-78 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{cards?.name}</h2>
              <p>{cards?.amount}</p>
              <div className="card-actions">
                <Link to={`/dashboard/paymethod/${cards._id}`}>
                <button  className="btn btn-primary">Pay</button>
                </Link>
              </div>
            </div>
          </div>)
          }

     
        </div>
    );
};

export default Payment;