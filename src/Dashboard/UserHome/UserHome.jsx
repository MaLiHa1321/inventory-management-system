import React, { useEffect, useState } from 'react';
import useAxios from '../../hook/useAxios';
import useAuth from '../../hook/useAuth';
import { Helmet } from 'react-helmet-async';

const UserHome = () => {
    const [shop, setShop] = useState([])
    const axiosSecure = useAxios()
    const {user} = useAuth();
    const userEmail = user?.email;
    useEffect(()=>{
        axiosSecure.get(`/shop?email=${userEmail}`)
        .then(res =>{
            setShop(res.data)
        })
        .catch(err => console.log(err))
    },[])
    return (
        <div>
              <Helmet>
                <title>InventTech | User Home</title>
            </Helmet>
          <h2>Hi Welcome {user?.displayName}</h2>
          
            
        </div>
    );
};

export default UserHome;