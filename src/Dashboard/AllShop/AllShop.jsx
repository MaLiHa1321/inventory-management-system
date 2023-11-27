import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hook/useAxiosPublic';
import { Helmet } from 'react-helmet-async';


const AllShop = () => {
    const [allShop, setAllShop] = useState([])
    const axiospublic = useAxiosPublic()
    useEffect(()=>{
        axiospublic.get('/shop/all')
        .then(res =>{
            setAllShop(res.data)
        })
        .catch(err => console.log(err))
    },[axiospublic])
    
    return (
        <div>
            <Helmet>
                <title>InventTech | AllShop</title>
            </Helmet>
            <h2>{allShop.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        
        </th>
        <th>Shop Logo</th>
        <th>Shop Name</th>
        <th>Product Limit</th>
        <th>shop Description</th>
        <th>Send Notice</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        allShop?.map((shop,idx) => <tr key={shop._id}>
        <th>
         {idx + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={shop?.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        
          </div>
        </td>
        <td>
         
          <h2>{shop?.shopName}</h2>
        </td>
        <td>{shop?.productLimit}</td>
        <td>{shop?.info}</td>
        <th>
          <button className="btn btn-ghost">Send Notice</button>
        </th>
      </tr> )
      }
      
    
    </tbody>
  
    
  </table>
</div>
            
        </div>
    );
};

export default AllShop;