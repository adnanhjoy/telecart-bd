import React from 'react';
// import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SubCategory: React.FC = () => {
    return (
        <li className='p-2 cursor-pointer hover:bg-gray-200 w-full rounded'>
            <span className='flex items-center justify-between'>
                <Link to='/' className='block text-dark'>Exercise & Fitness</Link>
                {/* <MdOutlineKeyboardArrowRight /> */}
            </span>
        </li>
    );
};

export default SubCategory;