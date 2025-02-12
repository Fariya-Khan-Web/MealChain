import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCard = ({ food }) => {

    const { _id, foodName, pickupLocation, foodImage, foodQuantity, donator, additionalNotes } = food

    return (
        <div className='rounded-md border shadow-2xl bg-white dark:bg-[#333232] dark:border-none grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 '>
            <img className='h-full lg:rounded-l-md' src={foodImage} alt="" />
            <div className='p-3 md:p-4 flex flex-col gap-3'>
                <h1 className='text-2xl md:text-3xl font-semibold'>{foodName}</h1>
                <p className='flex-grow hidden md:block'>{additionalNotes.substring(0, 220)}...</p>
                <p className='flex-grow md:hidden'>{additionalNotes.substring(0, 70)}...</p>
                <Link to={`/food/${_id}`} className='p-2 text-center font-semibold bg-[#d3b6b9] dark:bg-[#b88287] rounded-md w-full text-white hover:bg-[#d3b6b9] dark:bg-[#b88287]/80 hover:rounded-2xl'>See Details</Link>
            </div>
        </div>
    );
};

export default FeaturedCard;