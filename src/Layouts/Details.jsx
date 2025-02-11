import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { compareAsc, format } from 'date-fns';
import { toast } from 'react-toastify';

const Details = () => {

    const { user } = useContext(AuthContext)
    const [food, setFood] = useState()
    const [startDate, setStartDate] = useState(new Date())
    const navigate = useNavigate()


    const param = useParams()

    useEffect(() => {

        const fetchFood = async () => {
            try {
                const response = await axios.get(`https://kindbites.vercel.app/food/${param.id}`, {
                    withCredentials: true, // Include cookies for authentication
                }); // Replace with your actual API URL
                setFood(response.data)


            } catch (error) {
            }
        };

        fetchFood();
    }, [])

    const { _id, foodName, pickupLocation, foodImage, foodQuantity, donator, additionalNotes, expireDate, foodStatus } = food || {}


    const handleRequest = e => {
        // e.preventDefault()

        const form = new FormData(e.target)
        const additionalNote = form.get('note')


        const requested_food = {
            food_id: _id,
            foodName,
            foodImage,
            foodQuantity,
            donator,
            requester_email: user.email,
            request_date: startDate,
            pickupLocation,
            expireDate,
            additionalNote,
        }

        if (requested_food.requester_email === donator.email) {
            return toast.error("You can't request for your own food", { position: 'top-center' })
        }

        if (new Date().getTime() > new Date(expireDate).getTime()) {
            return toast.error('This food is Expired', { position: 'top-center' })
        }


        fetch('https://kindbites.vercel.app/food_request', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(requested_food)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Request sent to contridutor', { position: 'top-center' })
                    navigate('/myrequests')
                }
            })


    }



    return (
        <div className='min-h-[calc(100vh-250px)] flex items-center'>
            <div className="my-10 w-[94%] max-w-5xl mx-auto shadow-xl">
                <div>
                    <img
                        className='w-full h-[430px]'
                        src={foodImage}
                        alt="Movie" />
                </div>
                <div className="p-5">
                    <h2 className="text-4xl font-semibold">{foodName} <span className='text-base font-normal'>({foodQuantity} servings)</span></h2>
                    <p className='my-4 lg:w-[70%]'>{additionalNotes}</p>
                    <p className='font-semibold my-2'>Pickup Location: <span className='font-normal'>{pickupLocation}</span></p>
                    <p className='font-semibold my-2'>Expire Date: <span className='font-normal'> {food?.expireDate ? format(new Date(food.expireDate), 'P') : 'N/A'}</span></p>
                    <h3 className='my-2 mt-4 font-bold text-xl'>Contributors Identity-</h3>
                    <div className='flex items-center gap-6'>
                        <img className='rounded-full w-20' src={donator?.image} alt="" />
                        <div className='font-semibold flex flex-col gap-1'>
                            <p>Contributor: <span className='font-normal'>{donator?.name}</span></p>
                            <p>Email: <span className='font-normal'>{donator?.email}</span></p>
                        </div>
                    </div>

                    {/* modal opens */}
                    <div className="mt-4">
                        {/* <button onClick={()=>handleRequest(_id)} className="p-2 bg-[#d3b6b9] dark:bg-[#b88287] w-full text-white rounded-md hover:bg-[#d3b6b9] dark:bg-[#b88287]/80 hover:rounded-2xl">Request</button> */}
                        <button className="btn p-2 bg-[#d3b6b9] dark:bg-[#b88287] w-full text-white rounded-md hover:bg-[#d3b6b9] dark:bg-[#b88287]/80 hover:rounded-2xl" onClick={() => document.getElementById('my_modal_1').showModal()}>Request Food</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className="modal-action md:mr-3">
                                    <form onSubmit={handleRequest} method="dialog">

                                        {/* food name */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Food Name</span>
                                            </label>
                                            <input type="text" name='name' defaultValue={foodName} disabled className="input input-bordered" required />
                                        </div>

                                        {/* food image */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Food Image</span>
                                            </label>
                                            <input type="url" name='photo' defaultValue={foodImage} disabled className="input input-bordered" required />
                                        </div>

                                        <div className='grid md:grid-cols-2 gap-3'>

                                            {/* id */}
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Food id</span>
                                                </label>
                                                <input type="text" name='id' defaultValue={_id} disabled className="input input-bordered" required />
                                            </div>

                                            {/* location */}
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Pickup Location</span>
                                                </label>
                                                <input type="text" name='location' defaultValue={pickupLocation} disabled className="input input-bordered" required />
                                            </div>


                                        </div>


                                        <div className='grid md:grid-cols-2 gap-3'>

                                            {/* quantity */}
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Food Quantity</span>
                                                </label>
                                                <input type="number" name='quantity' defaultValue={foodQuantity} disabled className="input input-bordered" required />
                                            </div>

                                            {/* date */}
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Expired Date</span>
                                                </label>
                                                {/* <input type="date" name='exdate' placeholder="Enter expired date" className="input input-bordered" required /> */}
                                                <DatePicker

                                                    className='border p-2 rounded-lg w-full input input-bordered'
                                                    selected={expireDate}
                                                    disabled
                                                    onChange={date => setStartDate(date)}
                                                />
                                            </div>

                                        </div>

                                        <div className='grid md:grid-cols-2 gap-3'>

                                            {/* contributor name */}
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Contributor Name</span>
                                                </label>
                                                <input type="text" name='name' defaultValue={donator?.name} disabled className="input input-bordered" required />
                                            </div>

                                            {/* contributor email */}
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Contributor Email</span>
                                                </label>
                                                <input type="text" name='name' defaultValue={donator?.email} disabled className="input input-bordered" required />
                                            </div>

                                        </div>


                                        <div className='grid md:grid-cols-2 gap-3'>
                                            {/* Requester name */}
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Requester Email</span>
                                                </label>
                                                <input type="text" name='name' defaultValue={donator?.email} disabled className="input input-bordered" required />
                                            </div>

                                            {/* current time */}
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Current Date</span>
                                                </label>
                                                {/* <input type="date" name='exdate' placeholder="Enter expired date" className="input input-bordered" required /> */}
                                                <DatePicker
                                                    className='border p-2 rounded-lg w-full input input-bordered'
                                                    selected={startDate}
                                                    disabled
                                                    onChange={date => setStartDate(date)}
                                                />
                                            </div>

                                        </div>

                                        {/* note */}
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text">Additional Notes</span>
                                            </label>
                                            <input type="text" name='note' className="input mb-4 input-bordered" required />
                                        </div>


                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn p-2 bg-[#d3b6b9] dark:bg-[#b88287] w-full text-white rounded-md hover:bg-[#d3b6b9] dark:bg-[#b88287]/80 hover:rounded-2xl">Request</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;