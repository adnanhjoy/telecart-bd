import React from 'react';
import img from '../assets/account.jpg'
import { MdOutlineSpeakerNotes } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaHeart, FaLocationArrow, FaUnlock, FaUserAlt } from 'react-icons/fa';
import { CgNotes } from "react-icons/cg";
import { TiCancel } from "react-icons/ti";
import { TbTruckReturn } from "react-icons/tb";

const AccountLayout: React.FC = () => {
    return (
        <div className='container mx-auto my-10 md:my-20'>
            <div className='mx-4 md:mx-0'>
                {/* header  */}
                <div className='flex items-center gap-4'>
                    <img className='h-20 w-20 rounded-full' src={img} alt="" />
                    <div>
                        <p>Hello</p>
                        <h1 className='text-2xl font-medium'>Adnan Hossain</h1>
                    </div>
                </div>

                {/* outlet */}


                <div className='grid grid-cols-1 md:grid-cols-4 mt-10 gap-5'>
                    <Link to='/account/order' className='border shadow rounded-md bg-white flex items-center justify-center py-8 hover:border-primary cursor-pointer'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='border rounded-full h-20 w-20 flex items-center justify-center bg-gray-100'>
                                <MdOutlineSpeakerNotes className='text-primary text-4xl' />
                            </span>
                            <p className='text-lg font-medium text-center mt-2'>Orders</p>
                        </div>
                    </Link>

                    <Link to='/account/cancel' className='border shadow rounded-md bg-white flex items-center justify-center py-8 hover:border-primary cursor-pointer'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='border rounded-full h-20 w-20 flex items-center justify-center bg-gray-100'>
                                <TiCancel className='text-primary text-4xl' />
                            </span>
                            <p className='text-lg font-medium text-center mt-2'>Cancel</p>
                        </div>
                    </Link>


                    <Link to='/account/return' className='border shadow rounded-md bg-white flex items-center justify-center py-8 hover:border-primary cursor-pointer'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='border rounded-full h-20 w-20 flex items-center justify-center bg-gray-100'>
                                <TbTruckReturn className='text-primary text-4xl' />
                            </span>
                            <p className='text-lg font-medium text-center mt-2'>Return</p>
                        </div>
                    </Link>

                    <Link to='/account/edit-profile' className='border shadow rounded-md bg-white flex items-center justify-center py-8 hover:border-primary cursor-pointer'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='border rounded-full h-20 w-20 flex items-center justify-center bg-gray-100'>
                                <FaUserAlt className='text-primary text-4xl' />
                            </span>
                            <p className='text-lg font-medium text-center mt-2'>Edit Profile</p>
                        </div>
                    </Link>

                    <Link to='/account/password' className='border shadow rounded-md bg-white flex items-center justify-center py-8 hover:border-primary cursor-pointer'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='border rounded-full h-20 w-20 flex items-center justify-center bg-gray-100'>
                                <FaUnlock className='text-primary text-4xl' />
                            </span>
                            <p className='text-lg font-medium text-center mt-2'>Change Password</p>
                        </div>
                    </Link>

                    <Link to='/account/address' className='border shadow rounded-md bg-white flex items-center justify-center py-8 hover:border-primary cursor-pointer'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='border rounded-full h-20 w-20 flex items-center justify-center bg-gray-100'>
                                <FaLocationArrow className='text-primary text-4xl' />
                            </span>
                            <p className='text-lg font-medium text-center mt-2'>Address</p>
                        </div>
                    </Link>


                    <Link to='/account/wishlist' className='border shadow rounded-md bg-white flex items-center justify-center py-8 hover:border-primary cursor-pointer'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='border rounded-full h-20 w-20 flex items-center justify-center bg-gray-100'>
                                <FaHeart className='text-primary text-4xl' />
                            </span>
                            <p className='text-lg font-medium text-center mt-2'>Wishlist</p>
                        </div>
                    </Link>

                    <Link to='/account/transaction' className='border shadow rounded-md bg-white flex items-center justify-center py-8 hover:border-primary cursor-pointer'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='border rounded-full h-20 w-20 flex items-center justify-center bg-gray-100'>
                                <CgNotes className='text-primary text-4xl' />
                            </span>
                            <p className='text-lg font-medium text-center mt-2'>Transactions</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AccountLayout;