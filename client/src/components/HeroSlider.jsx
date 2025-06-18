import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import appleLogo from '../assets/images/apple_logo.png';
import slider_img1 from '../assets/images/slider_img_1.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
     return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper fluid-box z-10"
        style={{
            "--swiper-pagination-color": "#DB4444",
            }}
        autoplay={{
            delay: 3500
        }}
        pagination={{
            clickable: true
        }}
         
      >
        <SwiperSlide >
           <div className='flex justify-center bg-secondary w-full h-full'>
                <div className='w-full flex flex-col items-start justify-center space-y-3 pl-4 sm:pl-15'>
                    <div className='flex items-center gap-2 sm:gap-6'>
                        <img className='w-5 sm:w-10' src={appleLogo} alt="Apple Logo" />
                        <span className='fluid-text-banner-p text-text-color font-poppins font-normal'>iPhone 14 Series</span>
                    </div>
                    <h1 className='fluid-text-banner-h1 text-text-color font-semibold font-inter tracking-wide'>Up to 10% off Voucher </h1>
                    <Link to="/details" className='text-text-color underline underline-offset-8 flex cursor-pointer'>
                        <span className='font-poppins text-sm sm:text-[16px] font-medium'>Shop Now</span>
                        <span className='ml-1 sm:ml-3 w-6 h-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right max-sm:mt-1 w-5 h-5 sm:w-full sm:h-full"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </span>
                    </Link>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img className='w-full h-full p-0 sm:p-5 object-contain ' src={slider_img1} alt="Slider Image" />
                </div>
           </div>
        </SwiperSlide>
        <SwiperSlide >
           <div className='flex justify-center bg-secondary w-full h-full'>
                <div className='w-full flex flex-col items-start justify-center space-y-3 pl-15'>
                    <div className='flex items-center gap-6'>
                        <img src={appleLogo} alt="Apple Logo" />
                        <span className='text-text-color font-poppins text-[16px] font-normal'>iPhone 13 Series</span>
                    </div>
                    <h1 className='text-text-color text-5xl/15 font-semibold font-inter tracking-wide'>Up to 20% <br/> off Voucher </h1>
                    <Link to="/" className='text-text-color underline underline-offset-8 flex'>
                        <span className='font-poppins text-[16px] font-medium'>Shop Now</span>
                        <span className='ml-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </span>
                    </Link>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img className='w-full h-full p-5 object-contain ' src="https://pngimg.com/uploads/iphone_13/iphone_13_PNG30.png" alt="Slider Image" />
                </div>
           </div>
        </SwiperSlide>
        <SwiperSlide >
           <div className='flex justify-center bg-secondary w-full h-full'>
                <div className='w-full flex flex-col items-start justify-center space-y-3 pl-15'>
                    <div className='flex items-center gap-6'>
                        <img src={appleLogo} alt="Apple Logo" />
                        <span className='text-text-color font-poppins text-[16px] font-normal'>Macbook Air Series</span>
                    </div>
                    <h1 className='text-text-color text-5xl/15 font-semibold font-inter tracking-wide'>Up to 8% <br/> off Voucher </h1>
                    <Link to="/" className='text-text-color underline underline-offset-8 flex'>
                        <span className='font-poppins text-[16px] font-medium'>Shop Now</span>
                        <span className='ml-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </span>
                    </Link>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img className='w-full h-full p-5 object-contain ' src="https://pngimg.com/uploads/macbook/macbook_PNG9.png" alt="Slider Image" />
                </div>
           </div>
        </SwiperSlide>
        <SwiperSlide >
           <div className='flex justify-center bg-secondary w-full h-full'>
                <div className='w-full flex flex-col items-start justify-center space-y-3 pl-15'>
                    <div className='flex items-center gap-6'>
                        <img src={appleLogo} alt="Apple Logo" />
                        <span className='text-text-color font-poppins text-[16px] font-normal'>iPhone 14 Series</span>
                    </div>
                    <h1 className='text-text-color text-5xl/15 font-semibold font-inter tracking-wide'>Up to 10% <br/> off Voucher </h1>
                    <Link to="/" className='text-text-color underline underline-offset-8 flex'>
                        <span className='font-poppins text-[16px] font-medium'>Shop Now</span>
                        <span className='ml-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </span>
                    </Link>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img className='w-full h-full p-5 object-contain ' src={slider_img1} alt="Slider Image" />
                </div>
           </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;