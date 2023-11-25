import { Navigate, useLocation } from "react-router-dom";
// import useAdmin from "../hook/useAdmin";
import useAuth from "../hook/useAuth";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    // const[isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()
    if(loading ){
        return <p>Loading.....</p>
    }
    if(!user ){
        return <Navigate to='/login' state={location.pathname} replace></Navigate>

    }
    return children;
};

export default AdminRoute;