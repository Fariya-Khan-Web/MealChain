import React from 'react';

const Testimonial = ({ test }) => {

    const { id, name, email, image, testimonial, date } = test

    return (
        <div className='bg-white p-4 rounded-md max-w-md h-54 mx-5 shadow-xl'>
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <img className='w-16 p-1 border-2 border-[#c89ea2] rounded-full' src={image} alt="" />
                    <div>
                        <h3 className='font-bold text-lg'>{name}</h3>
                        <p className='text-gray-600'>{email}</p>
                    </div>
                </div>
                <h4>{date}</h4>
            </div>
            <div className='pt-7 overflow-hidden text-ellipsis'>
                {testimonial.substring(0, 200)}...
            </div>

        </div>
    );
};

export default Testimonial;