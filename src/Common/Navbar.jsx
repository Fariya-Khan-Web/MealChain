import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { CiEdit } from 'react-icons/ci';
import { MdLogout } from 'react-icons/md';

const Navbar = () => {

    const { user, signOutUser, dark, setDark } = useContext(AuthContext)


    const handleTheme = () => {
        setDark(!dark)
        console.log(dark)
        document.body.classList.toggle("dark");
    }


    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('User signed out successfully', { position: "top-center" })
            })
    }

    const links =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/foods'}>Available Foods</Link></li>
            {
                user &&
                <>
                    <li><Link to={'/addfood'}>Add Food</Link></li>
                    <li><Link to={'/myfoods'}>Manage My Food</Link></li>
                    <li><Link to={'/myrequests'}>My Food Request</Link></li>
                </>
            }
            <li><Link to={'/contact'}>Contact Us</Link></li>
        </>


    return (

        <div className=' bg-[#faf1e7] dark:bg-[#333232] sticky top-0 z-10  dark:text-white border-b dark:border-[#4b4949]'>
            <div className="navbar w-[98%] max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-3 my-auto -ml-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content bg-[#faf1e7] dark:bg-[#333232] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-bold -ml-4 md:ml-0">Meal<span className='text-[#d3b6b9] dark:text-[#b88287]'>Chain</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-base font-medium px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className='flex'>


                                {/* <div className='flex group relative'>

                                    <div className="btn btn-ghost btn-circle avatar">
                                        <img className='w-full rounded-full'
                                            alt="avatar"
                                            src={user?.photoURL} />
                                    </div>
                                    

                                    <div className='p-2 px-4 absolute top-12 -left-4 z-20 bg-white border dark:border-[#535353] dark:bg-[#535353] text-sm font-semibold rounded opacity-0 group-hover:opacity-100'>{user?.displayName}</div>

                                </div> */}

                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src={user?.photoURL}/>
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 dark:bg-[#333232] shadow">
                                        <li><h5 className='font-semibold'>{user?.displayName}</h5></li>
                                        <li><a className='flex justify-between'>Update Profile<CiEdit className='text-end font-bold' /></a></li>
                                        <li><a onClick={handleSignOut} className='flex justify-between'>Logout <MdLogout className='text-end'/></a></li>
                                    </ul>
                                </div>

{/* 
                                <Link onClick={handleSignOut} className="p-3 mx-2 md:px-4 bg-[#d3b6b9] dark:bg-[#b88287] text-white rounded-md hover:bg-[#d3b6b9] dark:bg-[#b88287]/80 hover:rounded-2xl">Sign Out</Link> */}
                            </div>
                            :
                            <div className='text-white'>
                                <Link to='/auth' className="p-1 px-3 md:py-2 md:px-4 border-r dark:border-[#535353] bg-[#d3b6b9] dark:bg-[#b88287]  rounded-md hover:bg-[#d3b6b9] dark:bg-[#b88287]/80 hover:rounded-l-2xl rounded-r-none">Login</Link>
                                <Link to='/auth/register' className="p-1 px-3 md:py-2 md:px-4  bg-[#d3b6b9] dark:bg-[#b88287] rounded-md hover:bg-[#d3b6b9] dark:bg-[#b88287]/80 hover:rounded-r-2xl rounded-l-none">Register</Link>
                            </div>
                    }


                    {/* theme toggle */}

                    <label className="swap swap-rotate ml-1 text-[#b6dbdb] dark:text-[#9bc5c5]">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onClick={handleTheme} />

                        {/* sun icon */}
                        <svg
                            className="swap-on h-7 w-7 md:h-10 md:w-10 mx-auto my-auto  fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-off h-7 w-7 md:h-10 md:w-10 mx-auto my-auto fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>


                </div>
            </div>
        </div>
    );
};

export default Navbar;