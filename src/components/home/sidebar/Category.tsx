import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import SubCategory from './SubCategory';

const Category: React.FC = () => {
    return (
        <div>
            <h1 className='bg-primary p-2 text-white font-semibold text-center rounded'>Category</h1>
            <ul className='relative'>
                <li className='p-2 cursor-pointer hover:bg-gray-200 w-full rounded group'>
                    <span className='flex items-center justify-between'>
                        <Link to='/' className='block text-dark'>Electron Product</Link>
                        <MdOutlineKeyboardArrowRight />
                    </span>
                    <ul className='absolute w-full left-full bg-white z-50 top-0 hidden group-hover:block'>
                        {
                            Array(7).fill(null).map((_, index) =>
                                <SubCategory
                                    key={index}
                                />)
                        }
                    </ul>
                </li>
                <li className='p-2 cursor-pointer hover:bg-gray-200 w-full rounded group'>
                    <span className='flex items-center justify-between'>
                        <Link to='/' className='block text-dark'>Mens & Fashion</Link>
                        <MdOutlineKeyboardArrowRight />
                    </span>
                    <ul className='absolute w-full left-full bg-white z-50 top-0 hidden group-hover:block'>
                        {
                            Array(7).fill(null).map((_, index) =>
                                <SubCategory
                                    key={index}
                                />)
                        }
                    </ul>
                </li>
                <li className='p-2 cursor-pointer hover:bg-gray-200 w-full rounded group'>
                    <span className='flex items-center justify-between'>
                        <Link to='/' className='block text-dark'>Womens & Fashion</Link>
                        <MdOutlineKeyboardArrowRight />
                    </span>
                    <ul className='absolute w-full left-full bg-white z-50 top-0 hidden group-hover:block'>
                        {
                            Array(7).fill(null).map((_, index) =>
                                <SubCategory
                                    key={index}
                                />)
                        }
                    </ul>
                </li>
                <li className='p-2 cursor-pointer hover:bg-gray-200 w-full rounded group'>
                    <span className='flex items-center justify-between'>
                        <Link to='/' className='block text-dark'>Beauty & Health</Link>
                        <MdOutlineKeyboardArrowRight />
                    </span>
                    <ul className='absolute w-full left-full bg-white z-50 top-0 hidden group-hover:block'>
                        {
                            Array(7).fill(null).map((_, index) =>
                                <SubCategory
                                    key={index}
                                />)
                        }
                    </ul>
                </li>
                <li className='p-2 cursor-pointer hover:bg-gray-200 w-full rounded group'>
                    <span className='flex items-center justify-between'>
                        <Link to='/' className='block text-dark'>Mothers & Baby</Link>
                        <MdOutlineKeyboardArrowRight />
                    </span>
                    <ul className='absolute w-full left-full bg-white z-50 top-0 hidden group-hover:block'>
                        {
                            Array(7).fill(null).map((_, index) =>
                                <SubCategory
                                    key={index}
                                />)
                        }
                    </ul>
                </li>
                <li className='p-2 cursor-pointer hover:bg-gray-200 w-full rounded group'>
                    <span className='flex items-center justify-between'>
                        <Link to='/' className='block text-dark'>Home & Lifestyle</Link>
                        <MdOutlineKeyboardArrowRight />
                    </span>
                    <ul className='absolute w-full left-full bg-white z-50 top-0 hidden group-hover:block'>
                        {
                            Array(7).fill(null).map((_, index) =>
                                <SubCategory
                                    key={index}
                                />)
                        }
                    </ul>
                </li>
                <li className='p-2 cursor-pointer hover:bg-gray-200 w-full rounded group'>
                    <span className='flex items-center justify-between'>
                        <Link to='/' className='block text-dark'>Support & Outdoors</Link>
                        <MdOutlineKeyboardArrowRight />
                    </span>
                    <ul className='absolute w-full left-full bg-white z-50 top-0 hidden group-hover:block'>
                        {
                            Array(7).fill(null).map((_, index) =>
                                <SubCategory
                                    key={index}
                                />)
                        }
                    </ul>
                </li>

            </ul>
        </div>
    );
};

export default Category;