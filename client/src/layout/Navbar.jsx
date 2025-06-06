import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const cart = 12;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  

  const dropdownHandler = () => {
    setDropdownOpen(prev => !prev)
  }

  console.log(dropdownOpen);
   

  return (
    <header className='border-b border-gray'>
      {/* Top banner */}
      <section className='bg-secondary flex space-x-3 justify-center items-center py-3 max-sm:space-x-0 max-sm:ps-2'>
        <p className='text-text-color text-sm font-normal font-poppins max-sm:text-[12px]'>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link className='text-text-color text-sm font-semibold underline font-poppins max-sm:text-[12px]' to='/'>
          Shop Now
        </Link>
      </section>

      {/* Main Navbar */}
      <nav className='container flex justify-between items-center py-4'>
        {/* Logo */}
        <div className='w-40'>
          <Link to='/'>
            <img className='w-full shrink-0' src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Nav Links */}
        <ul className='flex space-x-8'>
          <li><NavLink className='nav-links' to='/'>Home</NavLink></li>
          <li><NavLink className='nav-links' to='/contact'>Contact</NavLink></li>
          <li><NavLink className='nav-links' to='/about'>About</NavLink></li>
          <li><NavLink className='nav-links' to='/register'>Sign Up</NavLink></li>
        </ul>

        {/* Search & Icons */}
        <div className='flex items-center space-x-5'>
          {/* Search */}
          <div className='space-x-3 px-4 py-1 rounded bg-[#F5F5F5]'>
            <input className='border-none outline-none text-[12px]' type="text" placeholder='What are you looking for?' />
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>

          {/* Icons */}
          <div className='flex space-x-6'>
            <Link to='/' className='self-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </Link>

            {/* Cart */}
            <Link to='/' className="relative self-center">
              <span className="absolute -top-2 -end-[10px] w-5 h-5 bg-primary text-white flex justify-center items-center rounded-full text-xs">
                {cart}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-shopping-cart size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57l1.65-7.43H5.12" />
              </svg>
            </Link>

            {/* Profile Dropdown */}
            <div>
              <div className='w-10 h-10 border rounded-full flex justify-center items-center overflow-hidden cursor-pointer' onClick={dropdownHandler}>
                <img className='w-full' src="https://i.pravatar.cc/30" alt="Profile_Icon" />
              </div>
               <ul className={`absolute right-20 w-56 rounded-lg bg-gray-900/90 backdrop-blur-xl shadow-lg duration-300 ${dropdownOpen ? "opacity-100":"opacity-0"}`}>
                  <li className='hover:bg-gray-800 px-4 py-3 space-x-3 border-b border-gray-800'>
                    <svg
                      className="inline w-5 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <Link to='/' className='text-gray-200'>Manage My Account</Link>
                  </li>
                  <li className='hover:bg-gray-800 px-4 py-3 space-x-3 border-b border-gray-800'>
                    <svg
                      className="inline w-5 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <Link to='/' className='text-gray-200'>My Order</Link>
                  </li>
                  <li className='hover:bg-gray-800 px-4 py-3 space-x-3 border-b border-gray-800'>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-x-icon lucide-circle-x inline w-5 text-gray-300"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M15 9l-6 6M9 9l6 6" />
                      </svg>
                    <Link to='/' className='text-gray-200'>My Cancellations</Link>
                  </li>
                  <li className='hover:bg-gray-800 px-4 py-3 space-x-3 border-b border-gray-800'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star-icon lucide-star inline w-5 text-gray-300"
                    >
                    <path d="M11.525 2.295a.53.53 0 01.95 0l2.31 4.679a2.123 2.123 0 001.595 1.16l5.166.756a.53.53 0 01.294.904l-3.736 3.638a2.123 2.123 0 00-.611 1.878l.882 5.14a.53.53 0 01-.771.56l-4.618-2.428a2.122 2.122 0 00-1.973 0L6.396 21.01a.53.53 0 01-.77-.56l.881-5.139a2.122 2.122 0 00-.611-1.879L2.16 9.795a.53.53 0 01.294-.906l5.165-.755a2.122 2.122 0 001.597-1.16z" />
                  </svg>
                    <Link to='/' className='text-gray-200'>My Reviews</Link>
                  </li>
                  <li className='hover:bg-gray-800 px-4 py-3 space-x-3'>
                    <svg
                      className="inline w-5 text-gray-300 rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    <Link to='/' className='text-gray-200'>Logout</Link>
                  </li>
                </ul>
            </div>
             
            {/* End Profile */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
