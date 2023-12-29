import React from 'react';
import { Link } from 'react-router-dom';
import { CgNotes } from 'react-icons/cg';
import { FaHeart, FaLocationArrow, FaUnlock, FaUserAlt } from 'react-icons/fa';
import { MdOutlineSpeakerNotes } from 'react-icons/md';
import { TbTruckReturn } from 'react-icons/tb';
import { TiCancel } from 'react-icons/ti';

const AccountNav: React.FC = () => {
    return (
        <div className='my-5 flex items-center gap-5'>
            <Link to='/account/edit-profile' className='flex items-center gap-2 text-dark border rounded p-2'>
                <FaUserAlt />
                <p className='text-sm font-light'>Edit Profile</p>
            </Link>


            <Link to='/account/order' className='flex items-center gap-2 text-dark border rounded p-2'>
                <MdOutlineSpeakerNotes />
                <p className='text-sm font-light'>Orders</p>
            </Link>


            <Link to='/account/cancel' className='flex items-center gap-2 text-dark border rounded p-2'>
                <TiCancel />
                <p className='text-sm font-light'>Cancel</p>
            </Link>

            <Link to='/account/return' className='flex items-center gap-2 text-dark border rounded p-2'>
                <TbTruckReturn />
                <p className='text-sm font-light'>Return</p>
            </Link>

            <Link to='/account/address' className='flex items-center gap-2 text-dark border rounded p-2'>
                <FaLocationArrow />
                <p className='text-sm font-light'>Address</p>
            </Link>

            <Link to='/account/password' className='flex items-center gap-2 text-dark border rounded p-2'>
                <FaUnlock />
                <p className='text-sm font-light'>Change Password</p>
            </Link>

            <Link to='/account/wishlist' className='flex items-center gap-2 text-dark border rounded p-2'>
                <FaHeart />
                <p className='text-sm font-light'>Wishlist</p>
            </Link>

            <Link to='/account/transaction' className='flex items-center gap-2 text-dark border rounded p-2'>
                <CgNotes />
                <p className='text-sm font-light'>Transaction</p>
            </Link>
        </div>
    );
};

export default AccountNav;