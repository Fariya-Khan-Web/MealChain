import React, { useContext, useState } from 'react';
import { TbEyeglass, TbEyeglassOff } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {


    const { setUser, loginGoogle, createUser, updateUserProfile } = useContext(AuthContext)
    const [show, setShow] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const handleShow = () => {
        setShow(!show)
    }


    const handleSubmit = e => {
        e.preventDefault()

        const form = new FormData(e.target)
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')

        console.log({name, email, photo, password})

        const regex1 = /^.{6,}$/;

        if (!regex1.test(password)) {
            return toast.error('password must contain be at least 6 characters', { position: "top-center" });
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error('Must have an Uppercase letter in the password', { position: "top-center" });
        }
        if (!/[a-z]/.test(password)) {
            return toast.error('Must have a Lowercase letter in the password', { position: "top-center" });
        }

        createUser(email, password)
            .then(result => {
                setUser(result.user)
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {

                    })
                    .catch(err => {

                    })
                toast.success('User created successfully', { position: "top-center" })
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                toast.error('Error', { position: "top-center" })
            })

    }


    const handleGoogle = () => {
        loginGoogle()
            .then(result => {
                setUser(result.user)
                toast.success('User created successfully', { position: "top-center" })
                navigate(location?.state ? location?.state : '/')

            })
            .catch(err => {
                console.log(err)
                toast.error('Error, try again', { position: "top-center" })
            })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="relative bg-base-100 w-[94%] max-w-lg shrink-0 shadow-2xl rounded-lg m-20 py-6">
                <h1 className='font-semibold text-2xl text-[#E9B57C] mx-auto mt-6 text-center'>Create your account</h1>
                <hr className=' w-10/12 mx-auto mt-6' />
                <form onSubmit={handleSubmit} className="card-body">


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="url" name='photo' placeholder="Enter photo url" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={show ? `text` : `password`} name='password' placeholder="Enter a password" className="input input-bordered" required />
                    </div>


                    <div className="form-control mt-6">
                        <button className="py-2 px-4 bg-[#E9B57C] text-white rounded-md hover:bg-[#E9B57C]/80 hover:rounded-2xl">Register</button>
                    </div>
                    <div onClick={handleShow} className='absolute bottom-[257px] right-12' >
                        {show ? <TbEyeglassOff /> : <TbEyeglass />}
                    </div>
                </form>
                <div className="divider mx-10 -mt-4">OR</div>
                <button onClick={handleGoogle} className="p-2 w-[87%] mx-8  bg-[#E9B57C] rounded-md text-white hover:bg-[#E9B57C]/80 hover:rounded-2xl flex gap-2 justify-center items-center"><FaGoogle />Sign up With Google</button>
                <p className='text-center my-4'>Already have an account? <Link to='/auth' className='hover:text-[#E9B57C] link'>Login</Link> now</p>
            </div>
        </div>
    );
};

export default Register;