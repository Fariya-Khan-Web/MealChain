import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const {user} = useContext(AuthContext)

    const links =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/allfoods'}>Available Foods</Link></li>
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
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
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
                                            src={user.photoURL} />
                                    </div>

                                    <div className='p-2 px-4 absolute top-12 -left-4 z-20 bg-white border border-gray-700 text-xl font-semibold rounded opacity-0 group-hover:opacity-100'>{user.displayName}</div>

                                </div>
                                <Link onClick={handleSignOut} className="py-2 mx-2 px-4 bg-[#E9B57C] text-white rounded-md hover:bg-[#E9B57C]/10 hover:rounded-2xl">Sign Out</Link>
                            </div>
                            :
                            <div className='text-white'>
                                <Link to='/auth' className="py-2 px-4 border-r bg-[#E9B57C]  rounded-md hover:bg-[#E9B57C]/70 hover:rounded-l-2xl rounded-r-none">Login</Link>
                                <Link to='/auth/register' className="py-2 px-4  bg-[#E9B57C] rounded-md hover:bg-[#E9B57C]/70 hover:rounded-r-2xl rounded-l-none">Register</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;