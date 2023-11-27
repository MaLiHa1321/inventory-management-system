import { useState } from "react";
import useAuth from "../../hook/useAuth";
import useAxios from "../../hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const ProductDetails = () => {
   
    const axiosSecure = useAxios();
    const {user} = useAuth()

    const { data: products=[], isLoading,isError, refetch} = useQuery({
        queryKey:  ['products', user?.email],
        queryFn: async ()=>{
          const res = await axiosSecure.get(`/product?email=${user?.email}`)
          return  res.data;
        }
    }
    
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }
  
  const handleDelete = item =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/product/${item._id}`)
            .then(res =>{
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your product has been deleted.",
                        icon: "success"
                      });
                }
            })
         
        }
      });

  }





    return (
        <div>
            <Helmet>
                <title>InventTech | Product</title>
            </Helmet>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Sales Count</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
      {
        products.map((product,idx) =>  <tr key={product._id}>
        <th>
        {idx + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product?.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
         {product?.productName}
        
        </td>
        <td>{product?.quantity}</td>
        <td>{product?.sales}</td>
        <th>
          <button onClick={()=> handleDelete(product)} className="btn btn-ghost text-2xl">
            <AiFillDelete></AiFillDelete></button>
        </th>
        <th>
            <Link to={`/dashboard/updateProduct/${product._id}`}>
          <button className="btn btn-ghost text-2xl"><AiFillEdit></AiFillEdit></button>
            </Link>
        </th>
      </tr>)
      }
    
    </tbody>
   
    
  </table>
</div>
            
        </div>
    );
};

export default ProductDetails;