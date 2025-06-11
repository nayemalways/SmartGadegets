import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import Swiper css
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const HeroSection = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay
                pagination={{clickable: true}}
                scrollbar={{clickable: true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='h-66'
               
            >
                <SwiperSlide  className='bg-red-400'>Slide 1</SwiperSlide>
                <SwiperSlide  className='bg-indigo-400'>Slide 2</SwiperSlide>
                <SwiperSlide  className='bg-sky-400'>Slide 3</SwiperSlide>
                <SwiperSlide  className='bg-gray-400'>Slide 4</SwiperSlide>
                <SwiperSlide  className='bg-teal-400'>Slide 5</SwiperSlide>
                <SwiperSlide  className='bg-teal-400'>Slide 6</SwiperSlide>
                <SwiperSlide  className='bg-teal-400'>Slide 7</SwiperSlide>
            </Swiper>
        </>
    );
};

export default HeroSection;