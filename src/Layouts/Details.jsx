import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const [food, setFood] = useState()

    const param = useParams()
    console.log(param)

    useEffect(() => {

        const fetchFood = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/food/${param.id}`); // Replace with your actual API URL
                setFood(response.data)


            } catch (error) {
                console.error('Error fetching food data:', error);
            }
        };

        fetchFood();
    }, [])

    console.log(food)
    const { _id, foodName, pickupLocation, foodImage, foodQuantity, donator, additionalNotes } = food || {}

    return (
        <div className='min-h-[calc(100vh-250px)] flex items-center'>
            <div className="my-10 w-[94%] max-w-5xl mx-auto shadow-xl">
                <div>
                    <img
                        className='w-full h-[430px]'
                        src={foodImage}
                        alt="Movie" />
                </div>
                <div className="p-5">
                    <h2 className="text-4xl font-semibold">{foodName} <span className='text-base font-normal'>({foodQuantity} servings)</span></h2>
                    <p className='my-4 lg:w-[70%]'>{additionalNotes}</p>
                    <p className='font-semibold my-2'>Pickup Location: <span className='font-normal'>{pickupLocation}</span></p>
                    <h3 className='my-2 mt-4 font-bold text-xl'>Contributors Identity-</h3>
                    <div className='flex items-center gap-6'>
                        <img className='rounded-full w-20' src={donator?.image} alt="" /> 
                        <div className='font-semibold flex flex-col gap-1'>
                            <p>Contributor: <span className='font-normal'>{donator?.name}</span></p>
                            <p>Email: <span className='font-normal'>{donator?.email}</span></p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="p-2 bg-[#f5b041] w-full text-white rounded-md hover:bg-[#f5b041]/80 hover:rounded-2xl">Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;