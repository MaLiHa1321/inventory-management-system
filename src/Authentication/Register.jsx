
import { Link, useNavigate } from 'react-router-dom';
// import SocialLogin from './SocialLogin';

import toast, { Toaster } from 'react-hot-toast';
import SocialLogin from './SocialLogin';
import useAuth from '../hook/useAuth';
import useAxiosPublic from '../hook/useAxiosPublic';

const Register = () => {
  const axiosPublic = useAxiosPublic()
    const {createUser,updateUser} = useAuth()
  
  const navigate = useNavigate()
  const handleRegister = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password,name,photo)
     // validation
     if(password.length < 6) {
        toast.error('password should have 6 letter')
        return;
      }
     if(!/[A-Z]/.test(password)){
      toast.error("password should have atleast capital letter")
        return;
      }
     if(!/[@$!%*?&]/.test(password)){
      toast.error("password should have atleast spcial character")
      return;
     }
    createUser(email,password)
    .then(res => {
        console.log(res.user)
        updateUser(name,photo)
      .then(() =>{
           // save user to the database
           const userInfo = {
            name: name,
            email: email,
          
          }
          axiosPublic.post('/users', userInfo )
          .then(res =>{
            if(res.data.insertedId){
              toast.success('user created successfully')
              navigate('/')
            }
          })
      
      })
    })
    .catch(err => console.log(err))


   
 }
    return (
        <div>
               <Toaster
        position="top-right"
        reverseOrder={false}
      />
       <div>
          <h1 className='text-3xl text-center'>Please Register</h1>
             <form onSubmit={handleRegister} className="card-body w-full mx-auto md:w-3/4 lg:w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <p>Already have an account? <span className='text-blue-400'><Link to="/login">Login</Link></span></p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div className='mt-5'>
          <SocialLogin></SocialLogin>
        </div>
      </form>


       
            
        </div>
        </div>
    );
};

export default Register;