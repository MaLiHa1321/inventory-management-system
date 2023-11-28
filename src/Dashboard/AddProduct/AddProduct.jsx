import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import useAxios from '../../hook/useAxios';
import { imageUpload } from '../../api/utilis';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddProduct = () => {
    const {user} = useAuth()
    const [shop, setShop] = useState([])
    const axiosSecure = useAxios()
    const userEmail = user?.email;
    useEffect(()=>{
        axiosSecure.get(`/shop?email=${userEmail}`)
        .then(res =>{
            console.log(res.data)
            setShop(res.data)
           
        })
        .catch(err => console.log(err))
    },[axiosSecure,userEmail])
  
    const handleAddShop = async (e) =>{
        e.preventDefault()
        const form = e.target;
        const productName = form.name.value;
        const quantity = parseInt(form.quantity.value);
        const productCost = parseFloat(form.cost.value);
        const profit = parseFloat(form.profit.value);
        const discount = form.discount.value;
        const location = form.location.value;
        const sales = parseInt(form.sales.value);
        const info = form.des.value;
        const tax = 0.075;
        const sellingPrice = productCost + productCost * tax + productCost * (profit / 100).toFixed(2);
        const email = user?.email;
        const shopName = shop[0]?.shopName;
        const image = form.image.files[0];
        const imageData = await imageUpload(image)
        const photo = imageData?.data?.display_url;
        const buyingDate = new Date();
        const productaddInfo ={shopName,email,photo,productName,
            quantity,discount,sellingPrice,info,productCost,profit,sales,buyingDate,location
        }
         
        const userProductCountResponse = await axiosSecure.get(`/product?email=${userEmail}`);
        const userProductCount = userProductCountResponse.data.length;
      

        if (userProductCount < 3){
               await axiosSecure.post('/product', productaddInfo)
               .then(res =>{
                if(res.data.insertedId)
                console.log(res.data)
                Swal.fire("Product Added successfully!");

               })

              
        }
        else{
          Swal.fire('User product limit exceeded')
           return;
        }
    
    }

    return (
        <div>
            <Helmet>
                <title>InventTech | AddProduct</title>
            </Helmet>
           
           <div>
             <form onSubmit={handleAddShop} >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Product Name</span>
                  </label>
                  <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                </div>
              
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Quantity</span>
                  </label>
                  <input type="number" placeholder="Product Quantity" name="quantity" min='0' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Production Cost </span>
                  </label>
                  <input type="number" placeholder="Production cost" name="cost" min='0' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Profit Margin</span>
                  </label>
                  <input type="number" placeholder="Profit margin" name="profit" min='0' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Location</span>
                  </label>
                  <input type="text" placeholder="Product Location" name="location" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Discount</span>
                  </label>
                  <input type="number" placeholder="Product Discount" name="discount" min='0' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product sales</span>
                  </label>
                  <input type="number" placeholder="Product sales" name="sales" min='0' defaultValue={0} readOnly className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Information</span>
                  </label>
                  <textarea placeholder="description" type="text" name='des' className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
           
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Image</span>
                  </label>
                  <input type="file" id="image" name="image"  className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                </div>
                <div className="form-control m-6">
                  <button className="btn btn-success text-white">Add Product</button>
                </div>
                
                        </form>
                     </div>
            
        </div>
    );
};

export default AddProduct;