import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {

    const {user, signOutUser} = useContext(AuthContext)

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
        </>


    return (

        <div className='border-b bg-[#ccbda8] bg-opacity-70 sticky top-0 z-10 text-white'>
            <div className="navbar w-[96%] max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 "
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
                            className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <h1 className="text-3xl font-bold -ml-2">Meal<span className='text-[#c89ea2]'>Chain</span></h1>
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
                                <div className='flex group relative'>

                                    <div className="btn btn-ghost btn-circle avatar">
                                        <img className='w-full rounded-full'
                                            alt="avatar"
                                            src={user?.photoURL} />
                                    </div>

                                    <div className='p-2 px-4 absolute top-12 -left-4 z-20 bg-white border border-gray-700 text-xl font-semibold rounded opacity-0 group-hover:opacity-100'>{user?.displayName}</div>

                                </div>
                                <Link onClick={handleSignOut} className="p-3 mx-2 px-4 bg-[#c89ea2] text-white rounded-md hover:bg-[#c89ea2]/80 hover:rounded-2xl">Sign Out</Link>
                            </div>
                            :
                            <div className='text-white'>
                                <Link to='/auth' className="py-2 px-4 border-r bg-[#c89ea2]  rounded-md hover:bg-[#c89ea2]/80 hover:rounded-l-2xl rounded-r-none">Login</Link>
                                <Link to='/auth/register' className="py-2 px-4  bg-[#c89ea2] rounded-md hover:bg-[#c89ea2]/80 hover:rounded-r-2xl rounded-l-none">Register</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;