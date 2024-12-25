import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { AuthContext } from '../Provider/AuthProvider';
import { CiEdit } from 'react-icons/ci';
import { format } from 'date-fns'


const MyFoods = () => {

    const { user } = useContext(AuthContext)

    const { isPending ,data } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/foods/${user?.email}`)
            return res.json();
        }
    })

    if(isPending){
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-bars loading-lg"></span></div>
    }

    console.log(data)

    const handleDelete = (id) =>{

    }

    useEffect
    return (
        <div className='min-h-[calc(100vh-330px)]'>
            <div className="overflow-x-auto max-w-screen-xl mx-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>food</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Requests</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {/* rows */}

                        {
                            data?.map((food, index) => (

                                <tr key={food._id}>
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

                                    <td className=''>{food?.pickupLocation}</td>

                                    <td>{food?.expireDate ? format(new Date(food.expireDate), 'P') : 'N/A'}</td>

                                    <td>0</td>

                                    <th className='flex gap-4 items-center py-8 text-2xl'>
                                        <button className='text-green-700'><CiEdit /></button>
                                        <button onClick={()=>handleDelete(food._id)} className='text-red-500'><IoMdRemoveCircleOutline /></button>
                                    </th>

                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoods;