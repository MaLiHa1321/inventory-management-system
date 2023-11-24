import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { AiOutlineBars } from 'react-icons/ai';
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";


const Sidebar = () => {
 
    const [shop, setShop] = useState([])
    const axiosSecure = useAxios()
    const {user,logOutUser} = useAuth();
    const userEmail = user?.email;
    useEffect(()=>{
        axiosSecure.get(`/shop?email=${userEmail}`)
        .then(res =>{
            console.log(res.data)
            setShop(res.data)
        })
        .catch(err => console.log(err))
    },[axiosSecure, userEmail])
    const [isActive, setActive] = useState(false)

     // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
        
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

          {/* Sidebar */}
          <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
            <img src={shop.length > 0 ? shop[0].photo : ''} alt="" className="w-[50px]" />
            </div>
          </div>


          {/* Nav Items */}
            <ul>
                <li><NavLink to='/dashboard/userHome' className='m-3'>Home</NavLink></li>
                <li><NavLink to='/dashboard/addProductbtn'>Add Product</NavLink></li>
            </ul>
           

        </div>

        <div>
          <hr />

          
          <button
           onClick={logOutUser}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
           

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar;