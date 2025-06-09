import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo2 from '../assets/images/logo2.png';
import Dropdown from '../components/Dropdown';
import Searchbar from '../components/Searchbar';
import useClickOutside from '../hooks/useClickOutside';
 


const Navbar = () => {
  const [isToggle, setToggle] = useState(false);
  const navRef = useRef(null);
  
  // Custom Hook: Handle Outside click handler
  useClickOutside(navRef, () => setToggle(false));
   
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
            <img className='w-full shrink-0' src={logo2} alt="Logo" />
          </Link>
        </div>

        {/* Nav Links */}
        <ul
        className={`
        flex 
        flex-col 
        max-sm:absolute 
        max-sm:z-40 
        max-sm:top-0 
        max-sm:left-0 
        max-sm:bg-slate-100 
        max-sm:w-40 
        max-sm:h-screen 
        max-sm:ps-3 
        max-sm:py-3 
        max-sm:rounded 
        max-sm:gap-4
        max-md:grow
        max-md:justify-center
        max-md:gap-5 
        sm:flex-row 
        lg:space-x-8 ease-linear 
        duration-300 
        ${isToggle ? "max-sm:translate-x-0":"max-sm:-translate-x-100"}`}
        >
          {/* Sidebar Logo  */}
          <img className='sm:hidden shrink-0 w-28 h-auto object-contain bg-transparent' src={logo2} alt="Logo" />
          <li><NavLink className='nav-links' to='/'>Home</NavLink></li>
          <li><NavLink className='nav-links' to='/contact'>Contact</NavLink></li>
          <li><NavLink className='nav-links' to='/about'>About</NavLink></li>
          <li><NavLink className='nav-links' to='/register'>Sign Up</NavLink></li>
        </ul>

        {/* Search & Icons */}
        <div className='flex items-center space-x-5 max-sm:basis-[60%] max-lg:justify-between max-sm:justify-end'>
          {/* Searchbar */}
            <Searchbar />
          {/* Wish */}
          <div className='flex space-x-8 sm:space-x-6'>
            <Link to='/' className='self-center w-1 sm:w-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </Link>

            {/* Cart */}
            <Link to='/' className="relative self-center w-1 sm:w-auto ">
              <span className="absolute -end-6 -top-2 sm:-end-[10px] w-5 h-5 bg-primary text-white flex justify-center items-center rounded-full text-xs">
                {2}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-shopping-cart size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57l1.65-7.43H5.12" />
              </svg>
            </Link>

            {/* Profile Dropdown */}
               <Dropdown />

            {/* Hamburger Menu  */}
          </div>
          </div>

          {/* Hamburger Menu  */}
          <label ref={navRef} onClick={() => setToggle(prev => !prev)} className="btn btn-circle swap swap-rotate sm:hidden border-none bg-transparent">
                  <div className='w-5 flex flex-col gap-1.5 relative '>
                      <div className={`w-full h-[3px] bg-black ease-linear duration-200 ${isToggle ? "rotate-45 absolute  ":""}`}></div>
                      <div className={`w-full h-[3px] bg-black ml-0.5 ${isToggle ? "hidden":""}`}></div>
                      <div className={`w-full h-[3px] bg-black ease-linear duration-200 ${isToggle ? "-rotate-45 absolute ":""}`}></div>
                  </div>
          </label>
      </nav>
    </header>
  );
};

export default Navbar;
