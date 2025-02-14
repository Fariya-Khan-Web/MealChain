import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {

    const { _id, foodName, pickupLocation, foodImage, foodQuantity, donator, additionalNotes } = food

    return (
        <div className="card bg-base-100 shadow-xl rounded-md">
            <figure className='w-full h-full'>
                <img
                    className='h-full'
                    src={foodImage}
                    alt={foodName} />
            </figure>
            <div className="p-4 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">{foodName}</h2>
                <p className=''>{additionalNotes}</p>
                {/* <p className='my-3'><span className='font-semibold'>Quantity:</span> {foodQuantity} servings</p> */}
                <div className="card-actions">
                    <Link to={`/food/${_id}`} className="p-2 text-center font-semibold bg-[#d3b6b9] dark:bg-[#b88287] rounded-md w-full text-white hover:bg-[#d3b6b9] dark:bg-[#b88287]/80 hover:rounded-2xl">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;