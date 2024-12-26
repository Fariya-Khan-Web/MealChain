import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Testimonial from './testimonial';

const Impacts = () => {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('/testimonial.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTestimonials(data)
            })
    }, [])

    return (
        <div className='max-w-screen-2xl mx-auto py-14'>
            <h1 className='text-5xl font-bold'>Real Lives,<span className='text-[#f5b041]'> Real Impact</span></h1>
            <p className='w-[60%] my-5 text-gray-600'>Join us in creating a world where no meal goes to waste, and no one goes hungry. Start sharing today and be the reason someone smiles tomorrow!</p>
            <Marquee className='my-8' pauseOnHover={true} speed={80} loop={0}>
                {
                    testimonials.map(testi => <Testimonial key={testi.id} test={testi} />)
                }
            </Marquee>
        </div>
    );
};

export default Impacts;