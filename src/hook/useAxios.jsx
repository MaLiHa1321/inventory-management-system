import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
// import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://inventory-server-rho.vercel.app'
})

const useAxios = () => {
  const navigate = useNavigate()
  const {logOutUser} = useAuth()


    axiosSecure.interceptors.request.use(function(config){
      const token = localStorage.getItem("access-token")
      console.log(token)
      config.headers.authorization = `Bearer ${token}`;
       return config;
    }, 
    function(error){
      return Promise.reject(error);
    })
  
    // interceptor statue
    axiosSecure.interceptors.response.use(function(response){
      return response;
    },async (error) =>{
      const status = error.response.status;
      if(status === 401 || status === 403){

        console.log("user logout")
        // await logOutUser();
        //    navigate('/login')
  
      }
    
      return Promise.reject(error)
      
    }
    )

  
 
  return axiosSecure;
};

export default useAxios;