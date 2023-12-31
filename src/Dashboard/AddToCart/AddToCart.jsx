import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import useAxios from "../../hook/useAxios";
import Swal from "sweetalert2";
import {jsPDF} from "jspdf";
import 'jspdf-autotable';
import { Helmet } from "react-helmet-async";




const AddToCart = () => {
    const [cart,setCart] = useState([])
    const [total,setTotal] = useState([])
    const [discount,setDiscount] = useState([])
    const [totalPrice,setTotalPrice] = useState([])
    const axiosSecure = useAxios()
    const {user} = useAuth();

    useEffect(()=>{
        axiosSecure.get(`/cart?email=${user?.email}`)
        .then(res => {
            
            const totalDiscount = res.data.reduce((total,item) => total +  parseFloat(item.discount), 0);
            const discountTotal = totalDiscount /100;
            const toatlPrice = res.data.reduce((total,item) => total + item.sellingPrice, 0);
            const disCountAmount = toatlPrice * discountTotal;
            const totalAmont = (toatlPrice - disCountAmount);
            const formattedTotalAmount = parseFloat(totalAmont.toFixed(2));
            setTotalPrice(toatlPrice)
            setTotal(formattedTotalAmount)
            setDiscount(disCountAmount)
           
            // console.log(toatlPrice,totalDiscount, formattedTotalAmount)
           setCart(res.data)
        })
        .catch(err => console.log(err))
    },[axiosSecure,user])

    const handleCart = () =>{
        const date = new Date()
        cart.forEach((product) => {
            const cartInfo = { date, ...product };
            const doc = new jsPDF({orientation: 'landscape'})
            doc.autoTable({
                html: '#Your-CheckOut'
            })
            doc.save('checkOut.pdf');
            axiosSecure.patch(`/checkOut/${product._id}`, cartInfo)
              .then((res) => {
                if(res.data.modifiedCount > 0){
                    Swal.fire("You've successfully checkOut");
                     setCart([]);
                     setTotalPrice([]);
                     setTotal([]);
                     setDiscount([])
                }
              })
              .catch((err) => {
                console.log(err)
              });
          });
  
       
    }
    return (
        <div>
            <Helmet>
                <title>InventTech | AddTocart</title>
            </Helmet>
            <h2>{cart.length}</h2>
            <div className="overflow-x-auto">
  <table className="table" id="Your-CheckOut">
    {/* head */}
    <thead>
      <tr>
        
        <th>Product Id</th>
        <th>Product Image</th>
        <th>Product name</th>
        
        <th>quantity</th>
        <th>Discount</th>
        <th>Selling price</th>
       

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart?.map((product) =>   <tr key={product._id}>
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
           
            
           
       </tr>)
       
     
  
       
      }
    
    </tbody>
  
    
  </table>
  {/* <div className="divider"></div> 
  <h2>Price: ${totalPrice} </h2>
  <h2>Total Discount: ${discount} </h2>
  <h2>Total Price: ${total} </h2> */}
  <button onClick={() => handleCart()}  className="btn btn-outline btn-success mt-12">Get Paid</button>
</div>




        </div>
    );
};

export default AddToCart;