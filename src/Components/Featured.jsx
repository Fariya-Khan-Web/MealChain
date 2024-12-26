import React from 'react';
import FoodCard from './FoodCard';
import { useQuery } from '@tanstack/react-query';
import FeaturedCard from './FeaturedCard';
import { Link } from 'react-router-dom';

const Featured = () => {

    const { isPending, data } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/foods/top6`)
            return res.json();
        }
    })

    if (isPending) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-bars loading-lg"></span></div>
    }


    return (
        <div className='max-w-screen-2xl mx-auto py-14'>
            <h1 className='text-5xl font-bold'>Feast of Plenty: <span className='text-[#f5b041]'>Highlighted Food Donations</span></h1>
            <p className='w-[60%] my-5 text-gray-600'>Discover the most generous food donations from our community! This section highlights the top contributions with the largest quantities, ensuring plenty for those in need.</p>
            <div className='grid grid-cols-2 gap-5 my-10'>
                {
                    data?.map(food => <FeaturedCard key={food._id} food={food} />)
                }

            </div>

            <div className='flex justify-center'>
                <Link to={'/foods'} className='btn p-2 bg-[#f5b041] w-1/2 text-white rounded-md hover:bg-[#f5b041]/80 hover:rounded-2xl'>See All</Link>
            </div>

        </div>
    );
};

export default Featured;