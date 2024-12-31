import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { AuthContext } from '../Provider/AuthProvider';
import { CiEdit } from 'react-icons/ci';
import { format } from 'date-fns'
import axios from 'axios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';
// import { toast } from 'react-toastify';
// import axios from 'axios';


const MyFoods = () => {

    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure()

    const [myFoods, setMyFoods] = useState([])

    useEffect(() => {

        axiosSecure.get(`https://kindbites.vercel.app/foods/${user?.email}`)
            .then(res => setMyFoods(res.data))

    }, [user])



    const handleDelete = async id => {
        try {
            const data = await axios.delete(`https://kindbites.vercel.app/food/${id}`, {
                withCredentials: true, // Include cookies for authentication
            })

            toast.success('food removed')
            // fetchMyFoods()
        } catch (err) {
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
                    text: "Your food has been deleted. Refresh to see current food list",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className='min-h-[calc(100vh-290px)] bg-base-200 py-16'>
            <h1 className='text-3xl font-semibold max-w-screen-xl mx-auto'>Your Contributions to the Community-</h1>
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
                            <th>Food Status</th>
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

                                    <td>{food?.foodStatus}</td>

                                    <th className='flex gap-4 items-center py-8 text-2xl'>
                                        <Link to={`/update/${food._id}`} className='text-green-700'><CiEdit /></Link>
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