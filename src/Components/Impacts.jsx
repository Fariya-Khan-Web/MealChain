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
        <div className=' mx-auto py-14'>
            <h1 className='text-5xl max-w-screen-2xl mx-auto w-[95%] font-bold'>Real Lives,<span className='text-[#f5b041]'> Real Impact</span></h1>
            <div className='max-w-screen-2xl mx-auto'>
                <p className='md:w-[60%] w-[95%] my-5 text-gray-600'>Join us in creating a world where no meal goes to waste, and no one goes hungry. Start sharing today and be the reason someone smiles tomorrow!</p>

            </div>
            <Marquee className='my-8' pauseOnHover={true} speed={80} loop={0}>
                {
                    testimonials.map(testi => <Testimonial key={testi.id} test={testi} />)
                }
            </Marquee>
        </div>
    );
};

export default Impacts;