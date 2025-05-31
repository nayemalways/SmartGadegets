import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Navbar = () => {
    return (
        <header className='border-b border-gray '>
            <section className='bg-secondary flex space-x-3 justify-center items-center py-3 max-sm:space-x-0 max-sm:ps-2'>
                <p className='text-text-color inline-block text-sm font-normal font-poppins  max-sm:text-[12px] '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <Link className='text-text-color text-sm font-semibold underline decoration-1 font-poppins max-sm:text-[12px]' to='/'>Shop Now</Link>
            </section>
            <nav className='container w-full flex justify-between items-center py-4'>
                <div className='w-40'>
                    <Link to='/'>
                        <img className='w-full shrink-0' src={logo} alt="Logo" />
                    </Link>
                </div>
                <ul className='flex space-x-8'>
                    <li>
                        <NavLink className='nav-links' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-links' to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-links' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-links' to='/register'>Sign Up</NavLink>
                    </li>
                </ul>

                <div className='flex items-center space-x-5'>
                    <div className='space-x-3 px-4 py-1 rounded bg-[#F5F5F5]'>
                        <input className='inline-block border-none outline-none text-[12px]' type="text" name="search" id="search" placeholder='What are you looking for?' />
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <div className='flex space-x-3'>
                        <Link to='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </Link>
                        <Link to='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;