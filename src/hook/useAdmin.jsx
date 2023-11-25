// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxios from "./useAxios";


// const useAdmin = () => {
//     const {user,loading} = useAuth()
//     const axios = useAxios()
//     const {data : isAdmin, isPending: isAdminLoading} = useQuery({
//         queryKey: [user?.email, 'admin', ],
//         enable: !loading ,
//         // enable: !loading && !!localStorage.getItem("access-token"),
//         queryFn: async() =>{
//             const res = await axios.get(`/users/admin/${user?.email}`);
//             return res.data?.admin;

//         }
//     })
//    return [isAdmin, isAdminLoading]
// };

// export default useAdmin;