import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { compareAsc } from 'date-fns';

const AddFood = () => {

    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date())
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        const form = new FormData(e.target)
        const foodName = form.get('name')
        const foodImage = form.get('photo')
        const pickupLocation = form.get('location')
        const foodQuantity = form.get('quantity')
        const additionalNotes = form.get('note')
        const expireDate = startDate
        const foodStatus = 'available'

        
        const donator = {
            image: user.photoURL,
            name: user.displayName,
            email: user.email
        }


        if(new Date().getTime() > expireDate.getTime()){
            return toast.error("You can't add expired foods. This food is already expired", { position: 'top-center' })
        }

        const food = { foodName, pickupLocation, foodImage, foodQuantity, expireDate, donator, additionalNotes, foodStatus }

        fetch('https://kindbites.vercel.app/foods', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(food)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Food Shared to the website',{ position: 'top-center' })
                    navigate('/foods')
                }
            })

    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold">Share a Meal,<span className='text-[#f5b041]'> Spread the Love!</span></h1>
                    <p className="py-6 md:w-[70%] mx-auto lg:w-[86%] lg:mx-0">
                        Contribute to a better tomorrow by sharing surplus food. Fill in the details, including food name, quantity, location, and any special instructions. Your donation can bring hope and a meal to someone in need
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-2xl rounded-lg shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">

                        {/* food name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter food name" className="input input-bordered" required />
                        </div>

                        {/* food image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Image</span>
                            </label>
                            <input type="url" name='photo' placeholder="Enter photo url" className="input input-bordered" required />
                        </div>

                        {/* location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pickup Location</span>
                            </label>
                            <input type="text" name='location' placeholder="Enter picup location" className="input input-bordered" required />
                        </div>

                        <div className='grid md:grid-cols-2 gap-3'>

                            {/* quantity */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Quantity</span>
                                </label>
                                <input type="number" name='quantity' placeholder="Enter food quantity" className="input input-bordered" required />
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
                            <input type="text" name='note' placeholder="Enter a note" className="input input-bordered" required />
                        </div>



                        <div className="form-control mt-6">
                            <button className="btn  bg-[#f5b041] font-semibold text-lg text-white rounded-md hover:bg-[#f5b041]/80 hover:rounded-2xl">Add food</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddFood;