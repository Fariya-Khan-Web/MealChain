import React from 'react';
import Banner from '../Components/Banner';
import Featured from '../Components/Featured';
import Impacts from '../Components/Impacts';

const Home = () => {
    return (
        <div className='bg-base-200'>
            <Banner/>
            <Impacts/>
            <Featured/>
        </div>
    );
};

export default Home;