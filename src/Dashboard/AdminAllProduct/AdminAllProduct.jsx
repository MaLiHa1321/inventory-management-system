import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hook/useAxiosPublic';
import { Helmet } from 'react-helmet-async';

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
             <Helmet>
                <title>InventTech | AllProduct</title>
            </Helmet>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
       <th>Product Image</th>
        <th>product Name</th>
        <th>Shop Name</th>
        <th>Product quantity</th>
        <th>Sales</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        products.map((products,idx) =>  <tr>
        <th>
          {idx + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={products?.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
         {products?.productName}
       
        </td>
        <td>{products?.shopName}</td>
        <td>{products?.quantity}</td>
        <td>{products?.sales}</td>
       
      </tr>)
      }
     
    
      </tbody>
  </table>
</div>
            
            
        </div>
    );
};

export default AdminAllProduct;