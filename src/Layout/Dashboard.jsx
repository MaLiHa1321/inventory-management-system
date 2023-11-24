import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Footer/Footer';
import Sidebar from '../Dashboard/SideBar/Sidebar';

const Dashboard = () => {
    return (
        <div className='relative min-h-screen md:flex'>
        {/* Sidebar Component */}
        <Sidebar></Sidebar>
        <ul>
            <li><NavLink to='/dashboard/home'>Home</NavLink></li>
        </ul>
        <div className='flex-1  md:ml-64'>
          <div className='p-5'>
            {/* Outlet for dynamic contents */}
            <Outlet />
          </div>
          <Footer></Footer>
        </div>
         
      </div>
    );
};

export default Dashboard;