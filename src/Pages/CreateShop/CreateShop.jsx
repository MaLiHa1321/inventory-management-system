import { Toaster } from "react-hot-toast";
import useAuth from "../../hook/useAuth";
import { imageUpload } from "../../api/utilis";
import useAxios from "../../hook/useAxios";



const CreateShop = () => {
    const {user} = useAuth()
    const axiosSecure = useAxios()
         
            const handleAddShop = async (e) => {
                e.preventDefault();
                const form = e.target;
                const shopName = form.name.value;
                const ownerEmail = form.email.value;
                const ownerName = form.ownerName.value;
                const location = form.location.value;
                const info = form.des.value;
                const image = form.image.files[0];
                const imageData = await imageUpload(image)
                const photo = imageData?.data?.display_url;

                const shopInformation = {shopName,ownerEmail,ownerName,location,info,photo}
                axiosSecure.post('/shop', shopInformation)
                .then(res =>{
                    console.log(res.data)
                })
                .catch((err) =>{
                    console.log(err)
                })
              
               
              

            }
            return (
                <div>
                       <Toaster
                position="top-right"
                reverseOrder={false}
              />
                    <h2>Create a shop</h2>
                     <div>
                        <form onSubmit={handleAddShop} >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Shop Name</span>
                  </label>
                  <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Shop Owner Email</span>
                  </label>
                  <input type="text" placeholder="Email"  name="email" defaultValue={user?.email} className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Shop Owner Name</span>
                  </label>
                  <input type="text" placeholder="Owner Name" name="ownerName" defaultValue={user?.displayName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Shop location</span>
                  </label>
                  <input type="text" placeholder="Shop Location" name="location" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Shop Information</span>
                  </label>
                  <textarea placeholder="description" type="text" name='des' className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>
           
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Shop Logo</span>
                  </label>
                  <input type="file" id="image" name="image"  className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                </div>
                <div className="form-control m-6">
                  <button className="btn btn-primary">Add Shop</button>
                </div>
                
                        </form>
                     </div>
                    
                </div>
            );
        };
        
    


export default CreateShop;