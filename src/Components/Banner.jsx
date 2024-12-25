import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

// import required modules
import { Parallax, Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import slide1 from '../assets/slider/slide1.webp'
import slide4 from '../assets/slider/slide4.avif'
import slide5 from '../assets/slider/slide5.avif'
// import slide3 from '../../assets/banner-posters/oppenheimer-poster.jpg'


const Banner = () => {
    return (
        <div className=' mx-auto text-white text-center'>
            <Swiper
                // install Swiper modules
                modules={[Parallax, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                // navigation  
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                scrollbar={{ draggable: true }}
                parallax={true}
                loop={true}
                onSwiper={(swiper) => { }}
                onSlideChange={() => { }}
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img className='h-[750px] w-full' src={slide1} />
                        <div className='absolute bottom-0 left-0 z-10  bg-black bg-opacity-30 py-48 h-full w-full'>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl  font-bold -ml-2">Meal<span className='text-[#f5b041]'>Chain</span></h1>
                            <p className='w-[90%] md:w-[60%] mx-auto lg:w-[60%] py-8 text-lg font-medium'> Together, we can fight hunger and reduce food waste by sharing what we have with those who need it most. Join our community of compassionate individuals and make a difference one plate at a time.</p>
                            <button className='p-2 px-3 text-lg bg-[#f5b041] rounded-md hover:bg-[#f5b041]/95 hover:rounded-2xl mb-10'>Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='h-[750px] w-full' src={slide4} />
                        <div className='absolute bottom-0 left-0 z-10  bg-black bg-opacity-30 py-44 pt-52 h-full w-full'>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold -ml-2"><span className='text-[#f5b041]'>Share a Meal</span>, Spread the Love!</h1>
                            <p className='w-[90%] md:w-[60%] mx-auto lg:w-[60%] py-8 text-lg font-medium'>Every meal shared is a step closer to a hunger-free world. Join us in connecting those with extra food to those who need it most. Together, we can build a caring community where no one goes to bed hungry. </p>
                            <button className='p-2 px-3 text-lg bg-[#f5b041] rounded-md hover:bg-[#f5b041]/70 hover:rounded-2xl mb-10'>Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='h-[750px] w-full' src={slide5} />
                        <div className='absolute bottom-0 left-0 z-10  bg-black bg-opacity-40 py-44 pt-52 h-full w-full'>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold -ml-2">Transform Surplus into <span className='text-[#f5b041]'>Smiles</span></h1>
                            <p className='w-[90%] md:w-[60%] mx-auto lg:w-[60%] py-8 text-lg font-medium'>Join us in creating a world where no meal goes to waste, and no one goes hungry. Start sharing today and be the reason someone smiles tomorrow!</p>
                            <button className='p-2 px-3 text-lg bg-[#f5b041] rounded-md hover:bg-[#f5b041]/70 hover:rounded-2xl mb-10'>Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;