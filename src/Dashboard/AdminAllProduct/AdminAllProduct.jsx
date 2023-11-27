import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hook/useAxiosPublic';

const AdminAllProduct = () => {
    const [products, setProducts] = useState([])
    const axiospublic = useAxiosPublic();
    useEffect(()=>{
        axiospublic.get('/product/all')
        .then(res =>{
            setProducts(res.data)
        })
        
    },[axiospublic])
    return (
        <div>
            
            
        </div>
    );
};

export default AdminAllProduct;