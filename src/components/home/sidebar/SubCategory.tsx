import React from 'react';
// import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SubCategory: React.FC = () => {
    return (
        <li className='p-2 cursor-pointer hover:bg-yellow-50 w-full rounded'>
            <span className='flex items-center justify-between'>
                <Link to='/' className='block text-gray-500'>Exercise & Fitness</Link>
                {/* <MdOutlineKeyboardArrowRight /> */}
            </span>
        </li>
    );
};

export default SubCategory;