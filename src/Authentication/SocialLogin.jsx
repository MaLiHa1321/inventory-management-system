import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosPublic from '../hook/useAxiosPublic';


const SocialLogin = () => {
    const {user, googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const axiosPublic = useAxiosPublic()

    const handleSocialLogin = (media) => {
        media()
        .then(res => {
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName,
                
            }

         axiosPublic.post('/users', userInfo)
         .then(res =>{
            toast.success('Login succesful')
            navigate(location?.state ? location?.state : '/')
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
            <div onClick={() => handleSocialLogin(googleSignIn)} >

            <button className='btn btn-success text-white'>Google</button>
            </div>
            
        </div>
    );
};

export default SocialLogin;