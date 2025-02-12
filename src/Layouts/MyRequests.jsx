import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { format } from 'date-fns';
import { CiEdit } from 'react-icons/ci';
import { IoMdRemoveCircleOutline } from 'react-icons/io';

const MyRequests = () => {

    const { user } = useContext(AuthContext)
    const [requests, setRequests] = useState([])

    useEffect(() => {
        fetch(`https://kindbites.vercel.app/food_request/${user.email}`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRequests(data)
            })
    }, [user])

    return (
        <div className='min-h-[calc(100vh-290px)] py-16 w-[94%] mx-auto'>
            <h1 className='text-3xl font-semibold max-w-screen-xl mx-auto'>Foods You Requested For-</h1>
            <div className="overflow-x-auto max-w-screen-xl mx-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='dark:text-white dark:border-[#535353]'>
                            <th>

                            </th>
                            <th>food</th>
                            <th>Donator</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {/* rows */}

                        {
                            requests?.map((food, index) => (

                                <tr key={food?._id} className='dark:border-[#535353]'>
                                    <th>{index + 1}</th>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={food?.foodImage}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{food?.foodName}</div>
                                                <div className="text-sm opacity-50">{food?.foodQuantity} servings</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className=''>{food?.donator?.name}</td>
                                    <td className=''>{food?.pickupLocation}</td>

                                    <td>{food?.expireDate ? format(new Date(food.expireDate), 'P') : 'N/A'}</td>

                                    <td>{food?.expireDate ? format(new Date(food.request_date), 'P') : 'N/A'}</td>


                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRequests;