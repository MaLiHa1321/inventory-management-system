import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { AiOutlineBars } from 'react-icons/ai';
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";



const Sidebar = () => {
 
    const [shop, setShop] = useState([])
    const [isAdmin, setisAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxios()
    const {user,logOutUser} = useAuth();
    const userEmail = user?.email;
    useEffect(()=>{
        axiosSecure.get(`/shop?email=${userEmail}`)
        .then(res =>{
            // console.log(res.data)
            setShop(res.data)
        })
        .catch(err => console.log(err))
    },[axiosSecure, userEmail])
    const [isActive, setActive] = useState(false)

 

     // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  // for admin
  useEffect(() => {
    axiosSecure.get(`/users?email=${userEmail}`)
    .then(res => {
      setisAdmin(res.data[0].role)
      setLoading(false);
    })
      .catch(error => {
        console.error('Error fetching user role:', error);
        setLoading(false);
      });
  }, [axiosSecure, userEmail]);

  if (loading) {
    return <p>Loading...</p>; 
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
          className='mobile-menu-button p-4 z-10 focus:outline-none focus:bg-gray-600 '
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

          {/* Sidebar */}
          <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-green-200 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className="m-12 space-y-7">
          <div>
            <div className='w-full hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto'>
            <img src={shop.length > 0 ? shop[0].photo : ''} alt="" className="w-[50px]" />
            </div>
          </div>


          {/* Nav Items */}
          {isAdmin === 'admin'  ? (
    <ul >
      <li><NavLink to='/dashboard/adminHome' className='mb-3 text-xl'>Admin Home</NavLink></li>
      <li><NavLink to='/dashboard/allUser' className='m-3 text-xl'>All User</NavLink></li>
      <li><NavLink to='/dashboard/allShop' className='m-3 text-xl'>All Shop</NavLink></li>
      <li><NavLink to='/dashboard/allProduct' className='m-3 text-xl'>All Product</NavLink></li>
      <div className="divider"></div> 
      <li><NavLink to='/' className='m-3'>Home</NavLink></li>
    </ul>
  ) : (
    <ul>
      <li><NavLink to='/dashboard/userHome' className='p-4 text-lg font-bold '>UserHome</NavLink></li>
      <li><NavLink to='/dashboard/addProductbtn' className='m-3'>Add Product</NavLink></li>
      <li><NavLink to='/dashboard/allProducts' className='m-3'>Manage Product</NavLink></li>
      <li><NavLink to='/dashboard/salesCollection' className='m-3'>Sales collection</NavLink></li>
      <li><NavLink to='/dashboard/payment' className='m-3'>Subscription & payment</NavLink></li>
      <li><NavLink to='/dashboard/SalesSummary' className='m-3'>Sales Summary </NavLink></li>
      <div className="divider"></div> 
      <li><NavLink to='/' className='m-3 text-xl'>Home</NavLink></li>
    </ul>
  )}

          

        </div>

        <div>
          <hr />

          
          <button
           onClick={logOutUser}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-sky-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
           

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar;