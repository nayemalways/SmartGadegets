import React from 'react';
import HeroSlider from './HeroSlider';

const HeroSection = () => {
    return (
        <section className='container w-full h-auto md:h-90 grid grid-cols-12 justify-between max-md:flex-col-reverse'>
            <div className='hidden md:block md:col-span-3 border-r-1 border-slate-300'>
                <ul className='flex flex-col justify-center w-full h-full gap-3'>
                    <li className='font-poppins font-normal text-[16px]'>Women's Fashion</li>
                    <li className='font-poppins font-normal text-[16px]'>Men's Fashion</li>
                    <li className='font-poppins font-normal text-[16px]'>Electronics</li>
                    <li className='font-poppins font-normal text-[16px]'>Home & Lifestyle</li>
                    <li className='font-poppins font-normal text-[16px]'>Medicine</li>
                    <li className='font-poppins font-normal text-[16px]'>Sports & Outdoor</li>
                    <li className='font-poppins font-normal text-[16px]'>Baby's & Toys</li>
                    <li className='font-poppins font-normal text-[16px]'>Groceries & Pets</li>
                    <li className='font-poppins font-normal text-[16px]'>Health & Beauty</li>
                </ul>
            </div>
            <div className='col-span-12 md:col-span-9 w-full z-10'> 
                    <HeroSlider />
            </div>
        </section>
    );
};

export default HeroSection;