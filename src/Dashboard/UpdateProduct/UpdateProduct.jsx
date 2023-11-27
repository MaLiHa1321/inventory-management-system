import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { imageUpload } from '../../api/utilis';
import useAxios from '../../hook/useAxios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const UpdateProduct = () => {
    const loaderData = useLoaderData()
    const axiosSecure = useAxios()
    // console.log(Object.keys(loaderData).join(','))
      const {_id,email,photo,productName,quantity,discount,sellingPrice,info,productCost,profit,sales,location} = loaderData
    const handleUpdateProduct = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const productName = form.name.value;
        const quantity = form.quantity.value;
        const productCost = form.cost.value;
        const profit = form.profit.value;
        const location = form.location.value;
        const discount = form.discount.value;
        const sales = form.sales.value;
        const info = form.des.value;
        const image = form.image.files[0];
        const imageData = await imageUpload(image)
        const photo = imageData?.data?.display_url;

        const updateProduct = {productName,quantity,productCost,profit,location,discount,sales,info,photo}
        axiosSecure.patch(`/product/${_id}`, updateProduct)
       .then(res =>{
         if(res.data.modifiedCount > 0){
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${productName} has been updateed`,
              showConfirmButton: false,
              timer: 1500
            });
         }
       })
       .catch(err => console.log(err))
    }
    return (
        <div>
            <Helmet>
                <title>InventTech | Update Product</title>
            </Helmet>
                <form onSubmit={handleUpdateProduct} >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Product Name</span>
                  </label>
                  <input type="text" placeholder="name" name="name" defaultValue={productName} className="input input-bordered" required />
                </div>
              
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Quantity</span>
                  </label>
                  <input type="number" placeholder="Product Quantity" name="quantity" defaultValue={quantity} className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Production Cost </span>
                  </label>
                  <input type="number" placeholder="Production cost" name="cost" defaultValue={productCost} className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Profit Margin</span>
                  </label>
                  <input type="number" placeholder="Profit margin" name="profit" defaultValue={profit} className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Location</span>
                  </label>
                  <input type="text" placeholder="Product Location" name="location" defaultValue={location} className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Discount</span>
                  </label>
                  <input type="number" placeholder="Product Discount" name="discount" defaultValue={discount} className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product sales</span>
                  </label>
                  <input type="number" placeholder="Product sales" name="sales" defaultValue={sales} className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Shop Information</span>
                  </label>
                  <textarea placeholder="description" type="text" name='des' defaultValue={info} className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
           
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Image</span>
                  </label>
                  <input type="file" id="image" name="image"   className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                </div>
                <div className="form-control m-6">
                  <button className="btn btn-primary">Update Product</button>
                </div>
                
                        </form>
            
        </div>
    );
};

export default UpdateProduct;