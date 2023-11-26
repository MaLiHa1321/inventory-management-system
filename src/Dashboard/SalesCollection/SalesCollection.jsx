import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import useAxios from "../../hook/useAxios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Swal from "sweetalert2";


const SalesCollection = () => {
  const [search,setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
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
        if(res.data.insertedId > 0){
          Swal.fire("Added successfully!");
        }
      })
      .catch(err => console.log(err))
    }

    // search functionalty
    const handleSearch = e =>{
      e.preventDefault();
      const searchText = e.target.search.value.toLowerCase();
      setSearch(searchText);

      const filtered = products.filter((product) =>
      String(product._id).toLowerCase().includes(searchText)
    );

    setFilteredProducts(filtered);
    }
    const displayedProducts = search.length > 0 ? filteredProducts : products;
    return (
        <div>
           <h2>{products.length}</h2> 
           <form onSubmit={handleSearch} className="flex mb-4">
           <input type="text" placeholder="Search here" name='search' className="input input-bordered input-primary w-full" />
           <button className="btn btn-primary">Search</button>
           </form>
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
        displayedProducts?.map((product) =>   <tr key={product._id}>
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
           
            <th>
              <button onClick={() => handleCart(product)} className="btn "><AiOutlineShoppingCart></AiOutlineShoppingCart></button>
            </th>
          
       </tr>)
      }
    
    </tbody>
  
    
  </table>
</div>
<Link to='/dashboard/addToCart'> 
<button className="btn btn-primary">Go for CheckOut</button>
  </Link>
        </div>
    );
};

export default SalesCollection;