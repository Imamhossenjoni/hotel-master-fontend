import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import img from '../../images/hotel-master-logo.png'

const Navbarr = () => {
    const [user, loading, error] = useAuthState(auth);
    //log out
    const logOut=()=>{
        signOut(auth);
    }
    const menuItem =
        <>
            <li><Link to='/home'>HOME</Link></li>
            <li><Link to='/services'>SERVICES</Link></li>
            <li><Link to='/gallary'>GALLERY</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            {!user?<li><Link to='/login'>LOGIN</Link></li>:
            <li><Link to='/dashboard'>DASHBOARD</Link></li>
            }
            
        </>
    return (
        <div className="navbar bg-neutral text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-white rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img style={{height:'30px'}} src={img} alt=''></img>
                </a>

            </div>
            <div className="bg-neutral text-neutral-content hidden lg:flex">
                <ul className="menu menu-horizontal bg-natural  p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
            {user && <button className='btn btn-primary' onClick={logOut}>Log Out</button>}
            </div>
        </div>
    );
};

export default Navbarr;