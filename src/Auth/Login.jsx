import React, { useContext, useState } from 'react';
import pic from '../assets/auth/login.avif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TbEyeglass, TbEyeglassOff } from 'react-icons/tb';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

    const { setUser, loginGoogle, loginUser } = useContext(AuthContext)
    const [show, setShow] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const handleShow = () => {
        setShow(!show)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')

        loginUser(email, password)
            .then(result => {
                setUser(result.user)
                toast.success('Logged in successfully', { position: "top-center" })
                // setLoading(false)
                navigate(location?.state ? location?.state : '/')
            })
            .catch(err => {
                toast.error('Invalid email or password, try again', { position: "top-center" })
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
            <div className="relative w-[94%] max-w-lg shrink-0 shadow-2xl rounded-lg my-28 py-6 bg-[#faf1e7]/50 dark:bg-[#333232]">
                <h1 className='font-semibold text-2xl text-[#d3b6b9] dark:text-[#b88287] mx-auto mt-6 text-center'>Login your account</h1>
                <hr className=' w-10/12 mx-auto mt-6' />
                <form onSubmit={handleSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="   ">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="">Password</span>
                        </label>
                        <input type={show ? `text` : `password`} name='password' placeholder="password" className="input input-bordered" required />

                        <label className="label">
                            <a href="#" className=" link link-hover">Forgot password?</a>
                        </label>

                    </div>

                    <div className="form-control mt-6">
                        <button className="py-2 px-4 bg-[#d3b6b9] dark:bg-[#b88287] text-white rounded-md hover:bg-[#d3b6b9] dark:bg-[#b88287]/80 hover:rounded-2xl">Login</button>
                    </div>

                    <div onClick={handleShow} className='absolute bottom-[296px] right-12 text-[#b6dbdb] dark:text-[#9bc5c5]' >
                        {show ? <TbEyeglassOff /> : <TbEyeglass />}
                    </div>

                </form>
                <div className="divider mx-10 -mt-4">OR</div>
                <button onClick={handleGoogle} className="p-2 w-[87%] mx-8  bg-[#d3b6b9] dark:bg-[#b88287] rounded-md text-white hover:bg-[#d3b6b9] dark:bg-[#b88287]/80 hover:rounded-2xl">Login With Google</button>
                <p className='text-center my-4'>Don't have an account? <Link to='/auth/register' className='hover:text-[#d3b6b9] dark:text-[#b88287] link'>Register</Link> now</p>
            </div>
        </div>
    );
};

export default Login;