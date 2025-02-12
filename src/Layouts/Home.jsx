import React from 'react';
import Banner from '../Components/Banner';
import Featured from '../Components/Featured';
import Impacts from '../Components/Impacts';
import HowItWorks from '../Components/HowItWorks';
import QnA from '../Components/QnA';

const Home = () => {
    return (
        <div 
        // className='bg-base-200'
        >
            <Banner/>
            <HowItWorks/>
            <Featured/>
            <QnA/>
            <Impacts/>
        </div>
    );
};

export default Home;