import React, { useEffect, useState } from 'react';
import useAxios from '../../hook/useAxios';
import useAuth from '../../hook/useAuth';

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
    },[axiosSecure])
    return (
        <div>
          <h2>Hi Welcome {user?.displayName}</h2>
            
        </div>
    );
};

export default UserHome;