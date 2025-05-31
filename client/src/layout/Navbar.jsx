import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className=''>
            <section className='bg-secondary flex space-x-3 justify-center items-center py-3 max-sm:space-x-0 max-sm:ps-2'>
                <p className='text-text-color inline-block text-sm font-normal font-poppins  max-sm:text-[12px] '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <Link className='text-text-color text-sm font-semibold underline decoration-1 font-poppins max-sm:text-[12px]' to='/'>Shop Now</Link>
            </section>
        </header>
    );
};

export default Navbar;