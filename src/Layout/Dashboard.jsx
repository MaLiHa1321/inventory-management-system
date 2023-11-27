import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Footer/Footer';
import Sidebar from '../Dashboard/SideBar/Sidebar';

const Dashboard = () => {
    return (
      <div>
        <div>

        <div className='relative min-h-screen md:flex'>
        {/* Sidebar Component */}


        <Sidebar></Sidebar>
      
        <div className='flex-1 md:ml-64'>
          <div className='p-5'>
            <Outlet />
          </div>
        
        </div>
      
         
      </div>
        </div>
      
  <div className='flex-1 md:ml-64' >

<Footer></Footer>
</div>
      </div>
    );
};

export default Dashboard;