import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../hook/useAxios';
import { AiOutlineUser } from 'react-icons/ai';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hook/useAxiosPublic';

const AllUser = () => {
    const axios = useAxios();
   
    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await axios.get('http://localhost:5000/users/all');
            return res.data;
        }
    })
console.log(users)
// const handleRole = user =>{
//     axios.patch(`/users/manager/${user._id}`)
//     .then(res =>{
//         console.log(res.data)
//         if(res.data.modifiedCount > 0){
//             refetch()
//             Swal.fire({
//                 position: "top-end",
//                 icon: "success",
//                 title: `${user.name} is now Shop manager`,
//                 showConfirmButton: false,
//                 timer: 1500
//               });
//         }
//     })
// }
    return (
        <div>
            <div className='flex justify-evenly my-4 '>

            <h2 className='text-3xl font-bold'>All User</h2>
            <h2 className='text-3xl font-bold'>Total User:{users.length} </h2>

            
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Shop Name</th>
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
       
      </tr> )
      }
    
  
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllUser;