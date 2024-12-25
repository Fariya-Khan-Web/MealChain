import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading, setloading } = useContext(AuthContext)

    if(loading){
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-bars loading-lg"></span></div>
    }

    if (user) {
        setloading(false)
        return children
    }

    return  <Navigate to='/auth' state={location.pathname} />;
};

export default PrivateRoute;