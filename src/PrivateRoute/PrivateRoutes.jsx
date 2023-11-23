import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";



const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    if(loading){
        return <p>Loading.....</p>
    }
    if(!user){
        return <Navigate to='/login' state={location.pathname} replace></Navigate>

    }
    return children;
};

export default PrivateRoute;