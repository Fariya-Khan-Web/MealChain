import React, { useContext } from 'react';

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
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
// import slide3 from '../../assets/banner-posters/oppenheimer-poster.jpg'


const Banner = () => {

    const {user} = useContext(AuthContext)

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
                        <img className='md:h-[790px] w-full' src={slide1} />
                        <div className='absolute bottom-0 left-0 z-10  bg-black bg-opacity-20 dark:bg-opacity-40  md:py-48 md:pt-64  py-8 h-full w-full'>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold -ml-2">Meal<span className='text-[#d3b6b9] dark:text-[#b88287]'>Chain</span></h1>
                            <p className='w-[90%] md:w-[60%] mx-auto lg:w-[55%] md:py-8 md:text-lg font-medium hidden md:block'> Together, we can fight hunger and reduce food waste by sharing what we have with those who need it most. Join our community of compassionate individuals and make a difference one plate at a time.</p>
                            <p className='w-[90%] mx-auto py-3 font-medium md:hidden'>{'Together, we can fight hunger and reduce food waste by sharing what we have with those who need it most. Join our community of compassionate individuals and make a difference one plate at a time.'.substring(0, 100)}... </p>
                            <Link to={user? '/foods': '/auth'} className='p-1 md:p-2 px-3 text-lg bg-[#d3b6b9] dark:bg-[#b88287] rounded-md hover:bg-[#d3b6b9] dark:bg-[#b88287]/95 hover:rounded-2xl mb-10'>Get Started</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='md:h-[790px] w-full' src={slide4} />
                        <div className='absolute bottom-0 left-0 z-10  bg-black bg-opacity-20 dark:bg-opacity-40 md:py-48 md:pt-64 py-8 h-full w-full'>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold -ml-2"><span className='text-[#d3b6b9] dark:text-[#b88287]'>Share a Meal</span>, Spread <br className='md:hidden' />  the Love!</h1>
                            <p className='w-[90%] md:w-[60%] mx-auto lg:w-[55%] md:py-8 md:text-lg font-medium hidden md:block'>Every meal shared is a step closer to a hunger-free world. Join us in connecting those with extra food to those who need it most. Together, we can build a caring community where no one goes to bed hungry. </p>
                            <p className='w-[90%] mx-auto py-3 font-medium md:hidden'>{'Every food shared is a step closer to a hunger-free world. Join us in connecting those with extra food to those who need it most. Together, we can build a caring community where no one goes to bed hungry'.substring(0, 100)}... </p>
                            <Link to={user? '/foods': '/auth'} className='p-1 md:p-2 px-3 text-lg bg-[#d3b6b9] dark:bg-[#b88287] rounded-md hover:bg-[#d3b6b9] dark:bg-[#b88287]/95 hover:rounded-2xl mb-10'>Get Started</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='md:h-[790px] w-full' src={slide5} />
                        <div className='absolute bottom-0 left-0 z-10  bg-black bg-opacity-20 dark:bg-opacity-40  md:py-48 md:pt-64 h-full py-8 w-full'>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold -ml-2">Transform Surplus <br className='md:hidden' /> into <span className='text-[#d3b6b9] dark:text-[#b88287]'>Smiles</span></h1>
                            <p className='w-[90%] md:w-[60%] mx-auto lg:w-[55%] md:py-8 md:text-lg font-medium hidden md:block'>Join us in creating a world where no meal goes to waste, and no one goes hungry. Start sharing today and be the reason someone smiles tomorrow!</p>
                            <p className='w-[90%] mx-auto py-3 font-medium md:hidden'>{'Join us in creating a world where no meal goes to waste, and no one goes hungry. Start sharing today and be the reason someone smiles tomorrow!'.substring(0, 100)}... </p>
                            <Link to={user? '/foods': '/auth'} className='p-1 md:p-2 px-3 text-lg bg-[#d3b6b9] dark:bg-[#b88287] rounded-md hover:bg-[#d3b6b9] dark:bg-[#b88287]/95 hover:rounded-2xl mb-10'>Get Started</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;