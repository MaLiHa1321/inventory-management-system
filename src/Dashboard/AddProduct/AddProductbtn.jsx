import { Link } from "react-router-dom";
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";


const AddProductbtn = () => {
    const axiosSecure = useAxios();
    const {user} = useAuth()

    const { data: products=[]} = useQuery({
        queryKey:  ['products', user?.email],
        queryFn: async ()=>{
          const res =  axiosSecure.get(`/product?email=${user?.email}`)
          return (await res).data;
        }
    })
    return (
        <>
          <Helmet>
                <title>InventTech | AddProduct</title>
            </Helmet>
        {
            products?.length > 0 ? (<div className='flex'>
            <div className="w-full">
                <input type="text" placeholder={`Total ${products.length} Product added`} className="input input-bordered input-primary w-full" />
                </div>
            <div>
                <Link to='/dashboard/addProduct'>
                <button className='btn btn-success text-white'>Add A Product</button>
                </Link>
            </div>
           </div>) :
               <div className="w-11/12 mx-auto">

            
                   <Link to='/dashboard/addProduct'>
                   <button className='btn btn-success text-white'>Add A Product</button>
                   </Link>
               </div>
        }
    
        </>
    );
};

export default AddProductbtn;