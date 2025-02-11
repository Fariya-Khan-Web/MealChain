import React from 'react';
import FoodCard from './FoodCard';
import { useQuery } from '@tanstack/react-query';
import FeaturedCard from './FeaturedCard';
import { Link } from 'react-router-dom';

const Featured = () => {

    const { isPending, data } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await fetch(`https://kindbites.vercel.app/foods/top6`)
            return res.json();
        }
    })

    if (isPending) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-bars loading-lg"></span></div>
    }


    return (
        <div className='max-w-screen-2xl w-[95%] mx-auto  my-28 md:my-44'>
            <h1 className='text-4xl md:text-5xl font-bold'>Feast of Plenty: <span className='text-[#d3b6b9] dark:text-[#b88287]'>Highlighted Food Donations</span></h1>
            <p className='md:w-[80%] lg:w-[60%] my-5 text-gray-600 dark:text-white'>Discover the most generous food donations from our community! This section highlights the top contributions with the largest quantities, ensuring plenty for those in need.</p>
            <div className='grid md:grid-cols-2 gap-5 my-14'>
                {
                    data?.map(food => <FeaturedCard key={food._id} food={food} />)
                }

            </div>

            <div className='lg:flex justify-between items-center'>
                <h3 className='text-xl font-semibold p-2'>This section on features 6 foods of most quantity. click here to see all available foods-</h3>
                <Link to={'/foods'} className='btn p-2 bg-[#d3b6b9] dark:bg-[#b88287] w-1/3 text-white rounded-md hover:bg-[#d3b6b9] dark:bg-[#b88287]/80 hover:rounded-2xl'>See All</Link>
            </div>

        </div>
    );
};

export default Featured;