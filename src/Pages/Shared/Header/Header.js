import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assest/logo.png";
import "../Css/style.css"
import { AiFillProject, AiTwotoneSound, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { authcontext } from '../../../Authprovider/AuthProvide';

const Header = () => {

  const {user, logoutUser} = useContext(authcontext)


    const menuItem =(
      <>
         <li>
          <Link to="/" className='custom-btn menu-btn'>Home</Link>
          <Link to="/courses"  className='custom-btn menu-btn'>Cources</Link>
          <Link to="/aboutus" className='custom-btn menu-btn'>About us</Link>
          <Link to="/mycourse" className='custom-btn menu-btn'>My Cource</Link>
          <Link to="/books" className='custom-btn menu-btn'>Books</Link>
         </li>
      </>
    )




  return (
    <div>
      <div className="navbar bg-[#0f110e]">
<div className='container mx-auto'>
  {/* for mobile device */}
<div className="navbar-start flex ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
       {menuItem}
      </ul>
    </div>
    <div>
    <Link className="normal-case text-xl font-bold py-0">
      <img className='w-36' src={logo} alt="" />
    </Link>
    </div>
  </div>


{/* for leptop */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      {menuItem}
    </ul>
  </div>

  <div className="navbar-end flex">
 
 
{
  user?.email?
  <>
  
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle mr-5">
   
      <div className="indicator text-[#0071a8]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
  
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link to="/bookmark"><button className='button'>View Cart</button></Link>
          </div>
        </div>
      </div>
    </div>
    </div>

  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} alt="..." />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">  
        <li className='font-semibold student-menu py-1'><Link to="/profile"><span><AiOutlineUser/></span>Profile</Link></li>
        <li className='font-semibold student-menu py-1'><Link to="/studentAnalytics"><span><AiFillProject/></span>Sutdent Anaylitcs</Link></li>
        <li className='font-semibold student-menu py-1'><Link to="/leaderBoard"><span><AiTwotoneSound/></span>Leader Baord</Link></li>
        <li className='button flex items-center focus:bg-transparent'><Link to="#"><span><AiOutlineLogout/></span>Logout</Link></li>
      </ul>
    </div>
  </>
  :
  <>
  <div>
 <Link to="/login"><button className='button flex items-center'>Login</button></Link>
  </div>
  </>
}


 </div>
</div>  
  </div> 
  </div>

  );
};

export default Header;