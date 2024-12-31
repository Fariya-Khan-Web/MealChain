import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: 'https://kindbites.vercel.app',
    withCredentials: true
})

const UseAxiosSecure = () => {
    return axiosInstance
};

export default UseAxiosSecure;