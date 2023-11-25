import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import useAxios from "../../hook/useAxios";
import { Link } from "react-router-dom";


const SalesCollection = () => {
    const axiosSecure = useAxios();
    const {user} = useAuth()

    const { data: products=[]} = useQuery({
        queryKey:  ['products', user?.email],
        queryFn: async ()=>{
          const res = await axiosSecure.get(`/product?email=${user?.email}`)
          console.log(res.data)
          return res.data;
        }
    })
    // console.log(Object.keys(products).join(','))
    // add to cart
    const handleCart =(product) =>{
      axiosSecure.post('/cart', product)
      .then(res =>{
        console.log(res.data)
      })
      .catch(err => console.log(err))
    }
    return (
        <div>
           <h2>{products.length}</h2> 
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Product Id</th>
        <th>Product Image</th>
        <th>Product name</th>
        
        <th>quantity</th>
        <th>Discount</th>
        <th>Selling price</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        products?.map((product) =>   <tr key={product._id}>
            <th>
             {product._id}
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
              <h2>{product?.productName}</h2>
              
            </td>
            <td>{product?.quantity}</td>
            <td>{product?.discount} %</td>
            <td>$ {product?.sellingPrice}</td>
             <Link to='/dashboard/addToCart'>
            <th>
              <button onClick={() => handleCart(product)} className="btn btn-success">Add for check Out</button>
            </th>
             </Link>
       </tr>)
      }
    
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default SalesCollection;