import React from 'react';
import HeroSlider from './HeroSlider';

const HeroSection = () => {
    return (
        <section className='container w-full h-90 flex justify-between'>
            <div className='flex-1/4 border-r-1 border-slate-300'>
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
            <div className=' flex-3/4 flex justify-end items-end -z-10'> 
               <div className='max-w-195 h-80 relative'>
                    <HeroSlider />
               </div>
            </div>
        </section>
    );
};

export default HeroSection;