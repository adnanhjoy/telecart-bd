import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Category: React.FC = () => {
    return (
        <div>
            <h1 className='bg-primary p-2 text-white font-semibold text-center rounded'>Category</h1>
            <ul>
                <li className='p-2 flex items-center justify-between cursor-pointer hover:bg-yellow-50 w-full rounded'>
                    <Link to='/' className='block text-gray-500'>Electron Product</Link>
                    <MdOutlineKeyboardArrowRight />
                </li>
                <li className='p-2 flex items-center justify-between cursor-pointer hover:bg-yellow-50 w-full rounded'>
                    <Link to='/' className='block text-gray-500'>Mens Fashion</Link>
                    <MdOutlineKeyboardArrowRight />
                </li>
                <li className='p-2 flex items-center justify-between cursor-pointer hover:bg-yellow-50 w-full rounded'>
                    <Link to='/' className='block text-gray-500'>Sport Products</Link>
                    <MdOutlineKeyboardArrowRight />
                </li>
                <li className='p-2 flex items-center justify-between cursor-pointer hover:bg-yellow-50 w-full rounded'>
                    <Link to='/' className='block text-gray-500'>Womens Fashion</Link>
                    <MdOutlineKeyboardArrowRight />
                </li>
                <li className='p-2 flex items-center justify-between cursor-pointer hover:bg-yellow-50 w-full rounded'>
                    <Link to='/' className='block text-gray-500'>Home & Lifestyle</Link>
                    <MdOutlineKeyboardArrowRight />
                </li>
                <li className='p-2 flex items-center justify-between cursor-pointer hover:bg-yellow-50 w-full rounded'>
                    <Link to='/' className='block text-gray-500'>Groceries</Link>
                    <MdOutlineKeyboardArrowRight />
                </li>
            </ul>
        </div>
    );
};

export default Category;