import React from 'react';
import egg from '../assets/error/fried-egg.png'
import { Navigate, useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate()

    const handleBack =()=>{
        navigate(-1)
    }

    return (
        <div className='min-h-screen flex justify-center items-center text-[#251718] dark:bg-[#222028] dark:text-white '>
            <div>
            <div className='flex'>
                <div className='text-[100px] md:text-[200px]'>4</div>
                <div><img className='w-32 md:w-56 my-5 md:my-10' src={egg} alt="" /></div>
                <div className='text-[100px] md:text-[200px]'>4</div>
            </div>
            <div className='text-3xl md:text-5xl text-center -mt-10 mb-6 my-5'>page not found</div>
            <button onClick={handleBack} className='p-2 px-5 bg-[#d3b6b9] dark:bg-[#b88287] rounded-md hover:rounded-2xl md:mx-44 mx-20'>Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;