import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Navbar = () => {
    const {user, logOutUser } = useAuth()
    const navLinks =<>
    <NavLink to='/'  className='mr-3 text-2xl'>Home</NavLink>
    <NavLink to='/login' className='mr-3 text-2xl'>Login</NavLink>
    <NavLink to='/register' className='mr-3 text-2xl'>Register</NavLink>
    <NavLink to='/createShop' className='mr-3 text-2xl'>Create Shop</NavLink>
    <NavLink to='https://youtu.be/gDUzaANQ01A' target="_blank" rel="noopener noreferrer" className='mr-3 text-2xl'>Watch Demo</NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        {
    user?.email ?  <div className="navbar-end flex flex-col lg:flex-row">
      <img className='w-[40px] h-[40px] rounded-full' src={user?.photoURL} alt="" />
      <p>{user.displayName}</p>
    <a onClick={logOutUser} className="btn">Logout</a>
  </div>
  :  <div className="navbar-end">
    <Link to="/login">
    <a className="btn">Login</a>
    </Link>
  </div>
  }
        </div>
      </div>
    );
};

export default Navbar;