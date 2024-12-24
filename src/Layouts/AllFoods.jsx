import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from '../Components/FoodCard';

const AllFoods = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {

        const fetchFoods = async () => {
            try {
                const response = await axios.get('http://localhost:4000/foods'); // Replace with your actual API URL
                console.log(response.data)
                setFoods(response.data);

            } catch (error) {
                console.error('Error fetching food data:', error);
            }
        };

        fetchFoods();
    }, [])


    return (
        <div className='bg-base-200 py-10'>
            <h1 className='text-4xl font-bold text-center'>Fresh Foods,<span className='text-[#E9B57C]'> Ready for Pickup</span></h1>
            <p className='w-[60%] my-4 mx-auto text-center'>Discover a variety of freshly donated meals and ingredients, ready for pickup in your area. Browse the available options and be part of a community that cares and shares.</p>

            <div className='w-[96%] max-w-screen-xl mx-auto grid grid-cols-3 gap-4'>
                {
                    foods?.map(food => <FoodCard key={food._id} food={food} />)
                }
            </div>

        </div>
    );
};

export default AllFoods;