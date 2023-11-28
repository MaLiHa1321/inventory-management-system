import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";


const SalesHistory = () => {
    const [history,setHistory] = useState([])
    const {user} = useAuth()
    const axiosSecure = useAxiosPublic();
    useEffect(()=>{
        axiosSecure.get(`/cart?email=${user?.email}`)
        .then(res =>{
            setHistory(res.data)
        })
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Product Name</th>
        <th>Selling Date</th>
        <th>Profit</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        history.map((sales,idx) => 
        <tr key={sales._id}>
          <th>{idx + 1}</th>
          <td>{sales?.productName}</td>
          <td>{sales?.buyingDate}</td>
          <td>$ {sales?.sellingPrice - sales?.productCost}</td>
        </tr>)
      }

    
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default SalesHistory;