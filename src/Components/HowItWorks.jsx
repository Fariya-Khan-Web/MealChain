import React from 'react';
import { MdOutlineAccountBox } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { VscGitPullRequestClosed } from "react-icons/vsc";
import { RiUserCommunityLine } from "react-icons/ri";


const HowItWorks = () => {
    return (
        <div className='max-w-screen-2xl w-[95%] mx-auto py-14'>
            <h1 className='text-5xl font-bold'>Build a community, <span className='text-[#c89ea2]'>follow simple steps</span></h1>
            <p className='w-[60%] my-5 text-gray-600'>Discover the most generous food donations from our community! This section highlights the top contributions with the largest quantities, ensuring plenty for those in need.</p>
            <div className='max-w-screen-xl mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-4 py-9'>
               
                <div className='bg-white rounded-md shadow-lg p-3 text-center'>
                    <div>
                        <MdOutlineAccountBox className='text-[#c89ea2] text-6xl mx-auto' />
                    </div>
                    <h1 className='text-2xl font-semibold'>Create Account</h1>
                    <div className='mt-4'>Go to register page , provide all the informations required and you are ready to go</div>
                </div>
                
                
                <div className='bg-white rounded-md shadow-lg p-3 text-center'>
                    <div>
                        <BiDonateHeart className='text-[#c89ea2] text-6xl mx-auto' />
                    </div>
                    <h1 className='text-2xl font-semibold'>Share Food</h1>
                    <div className='mt-4'>Share your food with people in need. Fill up the form in add food page and bring smiles in one click</div>
                </div>
                
                
                <div className='bg-white rounded-md shadow-lg p-3 text-center'>
                    <div>
                        <VscGitPullRequestClosed  className='text-[#c89ea2] text-6xl mx-auto' />
                    </div>
                    <h1 className='text-2xl font-semibold'>Request Food</h1>
                    <div className='mt-4'>Explore available foods and request for food other people have added for you.</div>
                </div>
                
                
                <div className='bg-white rounded-md shadow-lg p-3 text-center'>
                    <div>
                        <RiUserCommunityLine className='text-[#c89ea2] text-6xl mx-auto' />
                    </div>
                    <h1 className='text-2xl font-semibold'>Our Community</h1>
                    <div className='mt-4'>Share and request for food , help us build a community to prevent food waste</div>
                </div>

            </div>

        </div>
    );
};

export default HowItWorks;
