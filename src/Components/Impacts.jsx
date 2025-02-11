import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Testimonial from './testimonial';

const Impacts = () => {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('/testimonial.json')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data)
            })
    }, [])

    return (
        <div className=' mx-auto my-40'>
            <div className='max-w-screen-2xl mx-auto'>
            <h1 className='text-4xl md:text-5xl mx-auto w-[95%] font-bold'>Real Lives,<span className='text-[#d3b6b9] dark:text-[#b88287]'> Real Impact</span></h1>
                <p className='w-[95%] mx-auto my-5 text-gray-600 dark:text-white'>Join us in creating a world where no meal goes to waste, and no one goes hungry. Start sharing today and be the reason someone smiles tomorrow!</p>

            </div>
            <Marquee className='my-10' pauseOnHover={true} speed={80} loop={0}>
                {
                    testimonials.map(testi => <Testimonial key={testi.id} test={testi} />)
                }
            </Marquee>
        </div>
    );
};

export default Impacts;