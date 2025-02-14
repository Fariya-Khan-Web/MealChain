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
                toast.error('Error', { position: "top-center" })
            })

    }


    const handleGoogle = () => {
        loginGoogle()
            .then(result => {
                setUser(result.user)
                toast.success('Signed in with google', { position: "top-center" })
                navigate(location?.state ? location?.state : '/')

            })
            .catch(err => {
                toast.error('Error, try again', { position: "top-center" })
            })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="relative w-[94%] max-w-lg shrink-0 shadow-2xl rounded-lg m-16 py-6 bg-[#faf1e7]/50 dark:bg-[#333232]">
                <h1 className='font-semibold text-3xl text-[#d3b6b9] dark:text-[#b88287] mx-auto mt-6 text-center'>Create your account</h1>
                <hr className=' w-10/12 mx-auto mt-6' />
                <form onSubmit={handleSubmit} className="card-body">


                    <div className="form-control">
                        <label className="label">
                            <span className="">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your name" className="input input-bordered dark:border-[#4b4949] dark:bg-[#333232]" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email" className="input input-bordered dark:border-[#4b4949] dark:bg-[#333232]" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="">Photo</span>
                        </label>
                        <input type="url" name='photo' placeholder="Enter photo url" className="input input-bordered dark:border-[#4b4949] dark:bg-[#333232]" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="">Password</span>
                        </label>
                        <input type={show ? `text` : `password`} name='password' placeholder="Enter a password" className="input input-bordered dark:border-[#4b4949] dark:bg-[#333232]" required />
                    </div>


                    <div className="form-control mt-6">
                        <button className="py-2 px-4 bg-[#d3b6b9] dark:bg-[#b88287] text-white rounded-md hover:bg-[#d3b6b9] dark:bg-[#b88287]/80 hover:rounded-2xl">Register</button>
                    </div>
                    <div onClick={handleShow} className='absolute bottom-[257px] right-12 text-[#b6dbdb] dark:text-[#9bc5c5]' >
                        {show ? <TbEyeglassOff /> : <TbEyeglass />}
                    </div>
                </form>
                <div className="divider mx-10 -mt-4">OR</div>
                <button onClick={handleGoogle} className="p-2 w-[87%] mx-8  bg-[#d3b6b9] dark:bg-[#b88287] rounded-md text-white hover:bg-[#d3b6b9] dark:bg-[#b88287]/80 hover:rounded-2xl flex gap-2 justify-center items-center"><FaGoogle />Sign up With Google</button>
                <p className='text-center my-4'>Already have an account? <Link to='/auth' className='hover:text-[#d3b6b9] dark:text-[#b88287] link'>Login</Link> now</p>
            </div>
        </div>
    );
};

export default Register;