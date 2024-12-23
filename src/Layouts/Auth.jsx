import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <div className='min-h-[calc(100vh-200px)]'>
            <Outlet/>
        </div>
    );
};

export default Auth;