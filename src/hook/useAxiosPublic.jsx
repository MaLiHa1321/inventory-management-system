import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://inventory-server-rho.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;