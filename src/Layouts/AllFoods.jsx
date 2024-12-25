import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from '../Components/FoodCard';
import { useQuery } from '@tanstack/react-query';
import { FiSearch } from 'react-icons/fi';

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
        console.log(layout)
    }

    // sort
    const handleSort = () => {
        const sortedfoods = [...foods].sort((a, b) => b.expireDate - a.expireDate)
        setFoods(sortedfoods)
    }

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


    // const { isPending, data } = useQuery({
    //     queryKey: ['foods'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:4000/foods`)
    //         return res.json();
    //     }
    // })

    // if (isPending) {
    //     return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-bars loading-lg"></span></div>
    // }


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
                    foods?.map(food => <FoodCard key={food._id} food={food} />)
                }
            </div>

        </div>
    );
};

export default AllFoods;