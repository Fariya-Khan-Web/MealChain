import React from 'react';

const FoodCard = ({ food }) => {

    const { foodName, pickupLocation, foodImage, foodQuantity, donator, additionalNotes } = food

    return (
        <div className="card bg-base-100 shadow-xl rounded-md flex flex-col">
            <figure className='w-full h-full'>
                <img
                    className='h-full'
                    src={foodImage}
                    alt="Shoes" />
            </figure>
            <div className="p-4">
                <h2 className="text-2xl font-semibold my-4">{foodName}</h2>
                <p className=''>{additionalNotes}</p>
                <p className='my-3'><span className='font-semibold'>Quantity:</span> {foodQuantity} servings</p>
                <div className="card-actions">
                    <button className="p-2 bg-[#E9B57C] rounded-md w-full text-white hover:bg-[#E9B57C]/80 hover:rounded-2xl">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;