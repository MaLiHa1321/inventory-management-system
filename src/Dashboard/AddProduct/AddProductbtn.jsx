import { Link } from "react-router-dom";


const AddProductbtn = () => {
    return (
        <div className='flex'>
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
            <div>
                <Link to='/dashboard/addProduct'>
                <button className='btn btn-primary'>Add A Product</button>
                </Link>
            </div>
           </div>
    );
};

export default AddProductbtn;