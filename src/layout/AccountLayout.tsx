import React from 'react';
import img from '../assets/account.jpg'
import { Outlet } from 'react-router-dom';

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

                <Outlet />
            </div>
        </div>
    );
};

export default AccountLayout;