import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'

const SearchSection: React.FC = () => {
    return (
        <div className='mb-4 flex items-center justify-between'>
            <div className='border flex items-center rounded w-3/5'>
                <input className='border-none outline-none w-full px-1 placeholder:text-sm' placeholder='Search' type="text" />
                <button className="bg-primary py-1 px-2">
                    <BiSearch className="text-xl text-white" />
                </button>
            </div>
            <div className='w-1/5 flex gap-2 justify-end'>
                <Link to='' className='bg-gray-200 p-1 rounded'>
                    <AiOutlineHeart  className="text-xl text-slate-700"/>
                </Link>
                <Link to='' className='bg-gray-200 p-1 rounded'>
                    <AiOutlineShoppingCart  className="text-xl text-slate-700"/>
                </Link>
                <Link to='' className='bg-gray-200 p-1 rounded'>
                    <FaRegUser className="text-xl text-slate-700" />
                </Link>
            </div>
        </div>
    );
};

export default SearchSection;