
import useAuth from "../../hook/useAuth";
import { imageUpload } from "../../api/utilis";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";




const CreateShop = () => {
 
    const {user} = useAuth()
    const axiosSecure = useAxiosPublic()
    const navigate = useNavigate();
  
  
         
            const handleAddShop = async (e) => {
                e.preventDefault();
                const form = e.target;
                const shopName = form.name.value;
                const email = form.email.value;
                const ownerName = form.ownerName.value;
                const location = form.location.value;
                const productLimit = 3;
                const info = form.des.value;
                const image = form.image.files[0];

                try{
                  const imageData = await imageUpload(image)
                  const photo = imageData?.data?.display_url;
  
                  const shopInformation = {shopName,email,ownerName,location,info,photo, productLimit}
                const response = axiosSecure.post(`/shop?email=${user?.email}`, shopInformation)
                  if (response.data?.status === 403) {
                    Swal.fire("User already has a shop");
                    return;
                  }
  
                 const shopInfo ={shopName, photo}
  
              
                  axiosSecure.patch(`/users/manager/${user?.email}`,shopInfo)
                  .then(res =>{
                    console.log(res.data)
                     if(res.data?.modifiedCount > 0){
                      Swal.fire("Congress! You've Successfully created your shop.");
                     
                      navigate('/dashboard/userHome')
                     }
                  })

                }
          
     catch (err) {
    console.error(err);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'An error occurred while creating the shop.',
    });
  }
              
               
              

            }
            return (
                <div>
                    
                    <h2 className="text-2xl font-bold">Create a shop</h2>
                     <div>
                        <form onSubmit={handleAddShop} >
                          <div className="flex flex-col md:flex-row gap-3">

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text"> Shop Name</span>
                  </label>
                  <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Shop Owner Email</span>
                  </label>
                  <input type="text" placeholder="Email"  name="email" defaultValue={user?.email} readOnly className="input input-bordered" required />
                </div>
                          </div>
                          <div className="flex flex-col md:flex-row gap-3">

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Shop Owner Name</span>
                  </label>
                  <input type="text" placeholder="Owner Name" name="ownerName" defaultValue={user?.displayName} readOnly className="input input-bordered" required />
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Shop location</span>
                  </label>
                  <input type="text" placeholder="Shop Location" name="location" className="input input-bordered" required />
                </div>
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
                <div className="form-control m-6 w-1/4 mx-auto">
                  <button className="btn btn-success text-white">Add Shop</button>
                </div>
                
                        </form>
                     </div>
                    
                </div>
            );
        };
        
    


export default CreateShop;