import React from 'react';
import Banner from '../Components/Banner';
import Featured from '../Components/Featured';

const Home = () => {
    return (
        <div className='bg-base-200'>
            <Banner/>
            <Featured/>
        </div>
    );
};

export default Home;