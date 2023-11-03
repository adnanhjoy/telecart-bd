import React from 'react';
import WebNav from './WebNav';
import { IoMdCall } from 'react-icons/io'

const Header: React.FC = () => {
    return (
        <div className='bg-primary'>
            <div className='grid grid-cols-3 items-center justify-between p-4 container mx-auto'>
                <div>
                    <h1 className='text-white font-semibold text-2xl'>Telecart BD</h1>
                </div>
                <div>
                    <WebNav />
                </div>
                <div className='flex items-center gap-2 justify-end'>
                    <IoMdCall className='text-3xl text-white' />
                    <span>
                        <p className='text-[10px] text-white'>Call To: +880 16797****</p>
                        <p className='text-[10px] text-white'>Email: example@gmail.com</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;