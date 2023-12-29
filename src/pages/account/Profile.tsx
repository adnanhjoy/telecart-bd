import React from 'react';

const ProfilePage: React.FC = () => {
    return (
        <div className='border-t border-t-primary pt-4'>
            <h1 className='text-2xl font-medium text-primary'>My Accoutn Details</h1>

            <form action="">
                <div className='mt-4'>
                    <label htmlFor="" className='font-medium'>Name:</label>
                    <input className='border rounded p-2 w-1/2 outline-none block border-dark mt-2' type="text" />
                </div>

                <div className='mt-4'>
                    <label htmlFor="" className='font-medium'>Email:</label>
                    <input className='border rounded p-2 w-1/2 outline-none block border-dark mt-2' type="email" />
                </div>

                <div className='mt-4'>
                    <label htmlFor="" className='font-medium'>Phone:</label>
                    <input className='border rounded p-2 w-1/2 outline-none block border-dark mt-2' type="text" />
                </div>

                <button className='bg-primary px-6 py-2 rounded-md text-white hover:opacity-90 mt-4'>Save</button>
            </form>
        </div>
    );
};

export default ProfilePage;