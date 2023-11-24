import React from 'react';

const AddProduct = () => {
    return (
        <div>
           <div className='flex'>
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
            <div>
                <button className='btn btn-primary'>Add A Product</button>
            </div>
           </div>
            
        </div>
    );
};

export default AddProduct;