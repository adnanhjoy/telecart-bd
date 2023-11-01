import React from 'react';
import WebNav from './WebNav';
import { IoMdCall } from 'react-icons/io'

const Header: React.FC = () => {
    return (
        <div className='grid grid-cols-3 items-center justify-between p-4 bg-slate-50'>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <WebNav />
            </div>
            <div className='flex items-center gap-2 justify-end'>
                <IoMdCall className='text-3xl' />
                <span>
                    <p className='text-[10px]'>Call To: +880 16797****</p>
                    <p className='text-[10px]'>Email: example@gmail.com</p>
                </span>
            </div>
        </div>
    );
};

export default Header;