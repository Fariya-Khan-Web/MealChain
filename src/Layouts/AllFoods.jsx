import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from '../Components/FoodCard';
import { useQuery } from '@tanstack/react-query';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AllFoods = () => {

    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('');
    const [layout, setLayout] = useState(true)


    // search
    const handleSearch = (event) => {
        setSearch(event.target.value.toLowerCase());
        setFoods(filteredFoods)
    };

    const filteredFoods = foods.filter((food) => food.foodName.toLowerCase().includes(search));

    // layout
    const handleLayout = () => {
        setLayout(!layout)
    }

    // sort
    const handleSort = () => {
        const sortedfoods = [...foods].sort((a, b) => b.expireDate - a.expireDate)
        setFoods(sortedfoods)
    }

    useEffect(() => {

        const fetchFoods = async () => {
            try {
                const response = await axios.get('https://kindbites.vercel.app/foods'); // Replace with your actual API URL
                setFoods(response.data);

            } catch (error) {
            }
        };

        fetchFoods();
    }, [])

    const available = foods.filter(food => food.foodStatus === 'available')


    return (
        <div className='bg-base-200 py-10'>
            <h1 className='text-4xl font-bold text-center'>Fresh Foods,<span className='text-[#f5b041]'> Ready for Pickup</span></h1>
            <p className='w-[60%] my-4 mx-auto text-center'>Discover a variety of freshly donated meals and ingredients, ready for pickup in your area. Browse the available options and be part of a community that cares and shares.</p>

            <div className='flex justify-end gap-3 max-w-screen-xl w-[94%] mx-auto my-10'>

                {/* search */}
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" value={search}
                        onChange={handleSearch} />
                    <button className=' hover:text-[#f5b041]/70'><FiSearch /></button>
                </label>

                {/* layout button */}
                <button onClick={handleLayout} className='btn bg-[#f5b041] font-semibold text-lg text-white rounded-md hover:bg-[#f5b041]/80 hover:rounded-2xl'>Change Layout</button>

                {/* sort button */}
                <button onClick={handleSort} className='btn bg-[#f5b041] font-semibold text-lg text-white rounded-md hover:bg-[#f5b041]/80 hover:rounded-2xl'>Sort by Expire-date</button>

            </div>

            <div className={layout ? `w-[96%] max-w-screen-xl mx-auto grid grid-cols-3 gap-4` : `w-[96%] max-w-screen-xl mx-auto grid grid-cols-2 gap-4`}>
                {
                    available?.map(food =>
                        <div className={layout?"card bg-base-100 shadow-xl rounded-md": "grid grid-cols-2 bg-base-100 shadow-xl rounded-md"}>
                            <img
                                className='h-full rounded'
                                src={food?.foodImage}
                                alt={food?.foodName} />
                            <div className="p-4 flex flex-col gap-4">
                                <h2 className="text-2xl font-semibold">{food?.foodName}</h2>
                                <p className=''>{food?.additionalNotes}</p>
                                {/* <p className='my-3'><span className='font-semibold'>Quantity:</span> {foodQuantity} servings</p> */}
                                <div className="card-actions">
                                    <Link to={`/food/${food?._id}`} className="p-2 text-center font-semibold bg-[#f5b041] rounded-md w-full text-white hover:bg-[#f5b041]/80 hover:rounded-2xl">See Details</Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default AllFoods;