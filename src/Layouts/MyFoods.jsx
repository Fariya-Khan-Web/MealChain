import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { AuthContext } from '../Provider/AuthProvider';
import { CiEdit } from 'react-icons/ci';
import { format } from 'date-fns'
import axios from 'axios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
// import { toast } from 'react-toastify';
// import axios from 'axios';


const MyFoods = () => {

    const { user } = useContext(AuthContext)


    const [myFoods, setMyFoods ] = useState([])

    useEffect(() => {
        fetchMyFoods()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])


    const fetchMyFoods = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods/${user?.email}`)
        setMyFoods(data)
    }
    console.log(myFoods)


    const handleDelete = async id => {
        try {
            const data = await axios.delete(`http://localhost:4000/food/${id}`)
            console.log(data)
            toast.success('food removed')
            fetchMyFoods()
        } catch (err) {
            console.log(err)
        }
        
    }

    const deleteModal = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
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
                            myFoods?.map((food, index) => (

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
                                        <button onClick={() => deleteModal(food._id)} className='text-red-500'><IoMdRemoveCircleOutline /></button>
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