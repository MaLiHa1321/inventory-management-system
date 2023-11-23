import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const SocialLogin = () => {
    const {user, googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const handleSocialLogin = (media) => {
        media()
        .then(res => {
            toast.success('login succesful')
            navigate(location?.state ? location?.state : '/')
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