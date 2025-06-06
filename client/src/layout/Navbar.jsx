import  React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Dropdown from '../components/Dropdown';
 
const Navbar = () => {
  const cart = 12;

 

  return (
    <header className='border-b border-gray '>
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
        <div className='max-w-25 md:max-w-40'>
          <Link to='/' className='flex'>
            <img className='w-full shrink-0' src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Nav Links */}
        <ul className='hidden lg:flex lg:space-x-8'>
          <li><NavLink className='nav-links' to='/'>Home</NavLink></li>
          <li><NavLink className='nav-links' to='/contact'>Contact</NavLink></li>
          <li><NavLink className='nav-links' to='/about'>About</NavLink></li>
          <li><NavLink className='nav-links' to='/register'>Sign Up</NavLink></li>
        </ul>

        {/* Search & Icons */}
        <div className='flex items-center space-x-5 max-lg:basis-[60%] max-lg:justify-between max-sm:justify-end'>
          {/* Search */}
          <div className='space-x-0 sm:space-x-3 px-0 sm:px-4 py-1 rounded sm:bg-[#F5F5F5] '>
            <input className='border-none outline-none text-[12px] max-sm:hidden' id='search'  type="text" placeholder='What are you looking for?' />
            <button className='active:text-primary' type='submit'>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5 cursor-pointer focus:bg-sky-400 block sm:inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

            {/* Small devices pop-up searchbar  */}
            
          </div>

          {/* Icons */}
          <div className='flex space-x-8 sm:space-x-6'>
            <Link to='/' className='self-center w-1 sm:w-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </Link>

            {/* Cart */}
            <Link to='/' className="relative self-center w-1 sm:w-auto ">
              <span className="absolute -end-6 -top-2 sm:-end-[10px] w-5 h-5 bg-primary text-white flex justify-center items-center rounded-full text-xs">
                {cart}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-shopping-cart size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57l1.65-7.43H5.12" />
              </svg>
            </Link>

            {/* Profile Dropdown */}
               <Dropdown />
            {/* End Profile */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
