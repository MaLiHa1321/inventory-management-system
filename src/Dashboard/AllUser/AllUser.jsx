import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import Swal from 'sweetalert2';

import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../hook/useAxiosPublic';

const AllUser = () => {
  const [page,setPage] = useState(1)
    const axiosSecure = useAxiosPublic()
    const limit= 12;
   
   
    const {data: users=[]} = useQuery({
        queryKey: ['users',page],
        queryFn: async() =>{
            const res = await axiosSecure.get(`https://inventory-server-rho.vercel.app/users/all?page=${page}&limit=${limit}`);
            console.log(res.data.result)
            return res.data.result;
        }
    })

  
  

    const handlePre =() =>{
      if(page > 1){

          setPage(page - 1)
      }
  }
  
  const handleNext =() =>{
      if(page < totalPage)
      setPage(page + 1)
  }

   const totalPage = parseInt( Math.ceil(users?.length / limit));

   const handleButtonClick = (users) =>{
        console.log("user")
   }

    return (
        <div className=''>
            <Helmet>
                <title>InventTech | AllUser</title>
            </Helmet>
            <div className='flex justify-evenly my-4 '>

            <h2 className='text-3xl font-bold'>All User</h2>
            <h2 className='text-3xl font-bold'>Total User:{users?.length} </h2>

            
            </div>
            <div className="overflow-x-auto">
  <table className=" table w-full">
    {/* head */}
    <thead>
      <tr>
        <th ></th>
        <th>Name</th>
        <th >Email</th>
        <th >Role</th>
        <th>Shop Name</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users?.map((user,idx) =>   <tr key={user._id}>
        <th>{idx + 1}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>{user?.role}</td>
        <td>{user?.shopInfo?.shopName}</td>
        <td>
        { (!user?.role || user?.role.toLowerCase() !== 'admin') && (!user?.shopInfo?.shopName) ? (
          <button onClick={() => handleButtonClick(user)} className='btn btn-outline btn-success'>Send Email</button>
        ) : (
         
          null
        )}
      </td>
       
      </tr> )
      }
    
  
    </tbody>
  </table>

         {/* pagination */}
         <div className='flex justify-end m-6'>
            <div className="join">
  <button onClick={handlePre} className="join-item btn">pre</button>

  {Array.from({ length: totalPage }, (_, index) => (
  <button
    key={index + 1}
    className={`${(index + 1) === page ?
      "join-item btn btn-outline btn-warning"
      : "join-item btn"}`}
    onClick={() => setPage(index + 1)} // Add 1 to index to start from page 1
  >
    {index + 1}
  </button>
))}


  <button onClick={handleNext} className="join-item btn">next</button>
</div>
            </div>
</div>
            
        </div>
    );
};

export default AllUser;