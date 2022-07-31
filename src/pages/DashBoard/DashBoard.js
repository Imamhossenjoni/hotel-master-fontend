import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content  ">
                {/* <!-- Page content here --> */}
                <h2 className='text-purple-500 text-3xl font-bold mt-5'>WelCome to Your DashBoard</h2>
                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden my-4">Open DashBoard</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay flex items-center justify-center h-screen"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Order</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;