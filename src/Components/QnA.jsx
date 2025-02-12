import React from 'react';
// import curious from '../../assets/picture/curious.png'
// import { motion } from 'motion/react';
import pic from '../assets/auth/team-qna.jpg'

const QnA = () => {
    return (

        <div className='max-w-screen-2xl mx-auto w-[94%] my-36'>
            <h1 className='text-4xl md:text-5xl mx-auto  font-bold'>Frequently Asked <span className='text-[#d3b6b9] dark:text-[#b88287]'>Questions </span></h1>
            <p className='text-lg mt-8 mb-12 font-semibold md:w-[55%]'>Find quick answers to the most common questions about NanoTasks. If you need more help, feel free to reach out to our support team!</p>

            <div className='md:flex justify-between flex-row-reverse'>

                <img

                    className='md:w-[50%] rounded-md' src={pic} alt="" />

                <div className='md:w-[48%] my-auto'>
                    <div className="collapse collapse-arrow border-b dark:border-[#535353] rounded-none my-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">What is MealChain?</div>
                        <div className="collapse-content">
                            <p>MealChain is a food donation platform that connects surplus food providers (restaurants, grocery stores, individuals) with those in need.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-b dark:border-[#535353] rounded-none my-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium"> How does MealChain work?</div>
                        <div className="collapse-content">
                            <p>Our platform allows food donors to list surplus food, and registered recipients (such as charities, shelters, and individuals in need) can claim it. The process is simple:</p>
                            <ul className='my-2 space-y-1'>
                                <li>1. Donors post available food.</li>
                                <li>2. Recipients browse listings and request items.</li>
                                <li>3. Pickup/Delivery is arranged based on availability.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-b dark:border-[#535353] rounded-none my-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Who can donate food?</div>
                        <div className="collapse-content">
                            <p>Anyone can donate! Whether you are a restaurant, grocery store, caterer, or individual with extra food, you can list it on our platform to help reduce food waste and support those in need.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-b dark:border-[#535353] rounded-none my-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Is there a cost to donate or receive food?</div>
                        <div className="collapse-content">
                            <p>No, MealChain operates as a completely free platform. Our goal is to bridge the gap between food surplus and food scarcity without any charges.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-b dark:border-[#535353] rounded-none my-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium"> How do I sign up?</div>
                        <div className="collapse-content">
                            <p>You can sign up by creating an account on our website. Simply provide your basic details, and once registered, you can start donating or requesting food immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QnA;