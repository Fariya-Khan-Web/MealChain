import React from 'react';

const Testimonial = ({ test }) => {

    const { id, name, email, image, testimonial, date } = test

    return (
        <div className='bg-white p-4 dark:bg-[#333232] dark:border-none rounded-md max-w-72 md:max-w-md h-54 mx-5 my-8 shadow-xl'>
            <div className='flex justify-between'>
                <div className='flex gap-3 items-center'>
                    <img className='w-16 p-1 border-2 border-[#d3b6b9] rounded-full' src={image} alt="" />
                    <div>
                        <h3 className='font-bold text-lg'>{name}</h3>
                        <p className='text-gray-600'>{email}</p>
                    </div>
                </div>
                <h4 className='hidden md:block'>{date}</h4>
            </div>
            <div className='pt-7 text-ellipsis'>
                {testimonial.substring(0, 200)}...
            </div>
            <h4 className='text-end md:hidden mt-3'>{date}</h4>

        </div>
    );
};

export default Testimonial;