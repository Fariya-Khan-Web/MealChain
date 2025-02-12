import React from 'react';
import { MdOutlineAccountBox } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { VscGitPullRequestClosed } from "react-icons/vsc";
import { RiUserCommunityLine } from "react-icons/ri";


const HowItWorks = () => {
    return (
        <div className='max-w-screen-2xl w-[95%] mx-auto my-28 md:my-40'>
            <h1 className='text-4xl md:text-5xl font-bold'>Build a community, <span className='text-[#d3b6b9] dark:text-[#b88287]'>follow simple steps</span></h1>
            <p className='md:w-[80%] lg:w-[60%] my-5 text-gray-600 dark:text-white'>Discover the most generous food donations from our community! This section highlights the top contributions with the largest quantities, ensuring plenty for those in need.</p>
            <div className='max-w-screen-xl mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-4 pt-9'>
               
                <div className='border bg-white dark:bg-[#333232] dark:border-none rounded-md shadow-lg p-3 text-center'>
                    <div>
                        <MdOutlineAccountBox className='text-[#b6dbdb] dark:text-[#9bc5c5] my-2 text-6xl mx-auto' />
                    </div>
                    <h1 className='text-2xl font-semibold'>Create Account</h1>
                    <div className='mt-4'>Go to register page , provide all the informations required and you are ready to go</div>
                </div>
                
                
                <div className=' border bg-white dark:bg-[#333232] dark:border-none  rounded-md shadow-xl p-5 text-center'>
                    <div>
                        <BiDonateHeart className='text-[#b6dbdb] dark:text-[#9bc5c5] my-2 text-6xl mx-auto' />
                    </div>
                    <h1 className='text-2xl font-semibold'>Share Food</h1>
                    <div className='mt-4'>Share your food with people in need. Fill up the form in add food page and bring smiles in one click</div>
                </div>
                
                
                <div className='border bg-white dark:bg-[#333232] dark:border-none rounded-md shadow-lg p-3 text-center'>
                    <div>
                        <VscGitPullRequestClosed  className='text-[#b6dbdb] dark:text-[#9bc5c5] my-2 text-6xl mx-auto' />
                    </div>
                    <h1 className='text-2xl font-semibold'>Request Food</h1>
                    <div className='mt-4'>Explore available foods and request for food other people have added for you.</div>
                </div>
                
                
                <div className='border bg-white dark:bg-[#333232] dark:border-none rounded-md shadow-lg p-3 text-center'>
                    <div>
                        <RiUserCommunityLine className='text-[#b6dbdb] dark:text-[#9bc5c5] my-2 text-6xl mx-auto' />
                    </div>
                    <h1 className='text-2xl font-semibold'>Our Community</h1>
                    <div className='mt-4'>Share and request for food , help us build a community to prevent food waste</div>
                </div>

            </div>

        </div>
    );
};

export default HowItWorks;
