import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const Update = () => {

    const { id } = useParams()

    const [startDate, setStartDate] = useState(new Date())
    // const queryClient = useQueryClient();
    const navigate = useNavigate()



    const { isPending, data: foodData } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await fetch(`https://kindbites.vercel.app/food/${id}`)
            return res.json();
        }
    })

    // const mutation = useMutation(
    //     async (updatedData) => {
    //         const res = await fetch(`https://kindbites.vercel.app/food/${id}`, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(updatedData),
    //         });
    //         if (!res.ok) throw new Error('Failed to update food data');
    //         return res.json();
    //     },
    //     {
    //         onSuccess: () => {
    //             toast.success('Food data updated successfully', { position: 'top-center' });
    //             queryClient.invalidateQueries(['food', id]); // Refetch updated food data
    //             navigate(-1)
    //         },
    //         onError: (err) => {
    //             toast.error(`Error: ${err.message}`, { position: 'top-center' });
    //         },
    //     }
    // );


    const { _id, foodName, pickupLocation, foodImage, foodQuantity, donator, additionalNotes, expireDate, foodStatus } = foodData || {}

    const handleUpdate = e => {
        e.preventDefault()

        const form = new FormData(e.target)
        const foodName = form.get('name')
        const foodImage = form.get('photo')
        const pickupLocation = form.get('location')
        const foodQuantity = form.get('quantity')
        const additionalNotes = form.get('note')
        const expireDate = startDate

        const updatedData = {
            foodName,
            foodImage,
            pickupLocation,
            foodQuantity,
            additionalNotes,
            expireDate
        }

        // mutation.mutate(updatedData)

        fetch(`https://kindbites.vercel.app/food/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Updated food data', { position: 'top-center' })
                    navigate(-1)
                }
            })
    }

    return (
        <div className=' min-h-screen bg-base-200 flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-2xl rounded-lg shadow-2xl -mt-28">
                <form onSubmit={handleUpdate} className="card-body">

                    {/* food name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={foodName} className="input input-bordered" required />
                    </div>

                    {/* food image */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Image</span>
                        </label>
                        <input type="url" name='photo' defaultValue={foodImage} className="input input-bordered" required />
                    </div>

                    {/* location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <input type="text" name='location' defaultValue={pickupLocation} className="input input-bordered" required />
                    </div>

                    <div className='grid md:grid-cols-2 gap-3'>

                        {/* quantity */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Quantity</span>
                            </label>
                            <input type="number" name='quantity' defaultValue={foodQuantity} className="input input-bordered" required />
                        </div>

                        {/* date */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Expired Date</span>
                            </label>
                            {/* <input type="date" name='exdate' placeholder="Enter expired date" className="input input-bordered" required /> */}
                            <DatePicker
                                className='border p-2 rounded-lg w-full input input-bordered'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>

                    </div>

                    {/* note */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Additional Notes</span>
                        </label>
                        <input type="text" name='note' defaultValue={additionalNotes} className="input input-bordered" required />
                    </div>



                    <div className="form-control mt-6">
                        <button className="btn  bg-[#f5b041] font-semibold text-lg text-white rounded-md hover:bg-[#f5b041]/80 hover:rounded-2xl">Add food</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Update;