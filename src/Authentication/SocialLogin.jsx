
import toast, { Toaster } from 'react-hot-toast';


const SocialLogin = () => {
    // const {user, googleLogin} = useContext(AuthContext)
    // const navigate = useNavigate()


    const handleSocialLogin = (media) => {
        media()
        .then(res => {
            toast.success('login succesful')
            // navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
             <Toaster
        position="top-right"
        reverseOrder={false}
      />
            <div onClick={() =>
                 handleSocialLogin()}
                  >

            <button className='btn btn-success text-white'>Google</button>
            </div>
            
        </div>
    );
};

export default SocialLogin;