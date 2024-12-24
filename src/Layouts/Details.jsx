import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const [food, setFood] = useState()

    const param = useParams()
    console.log(param)

    useEffect(() => {

        const fetchFood = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/food/${param.id}`); // Replace with your actual API URL
                setFood(response.data)
                

            } catch (error) {
                console.error('Error fetching food data:', error);
            }
        };

        fetchFood();
    }, [])

    console.log(food)
    const { _id, foodName, pickupLocation, foodImage, foodQuantity, donator, additionalNotes } = food || {}

    return (
        <div className='min-h-[calc(100vh-250px)] flex items-center'>
            <div className="card my-10 max-w-5xl mx-auto bg-base-100 shadow-xl">
                <div>
                    <img
                        src={foodImage}
                        alt="Movie" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;