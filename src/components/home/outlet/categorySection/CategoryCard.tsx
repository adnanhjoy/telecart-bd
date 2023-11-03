import React from 'react';
import image from '../../../../assets/category/category1.jpg'

const CategoryCard: React.FC = () => {
    return (
        <div className='bg-white rounded-md shadow-md p-1 hover:cursor-pointer'>
            <img className='h-20 w-full' src={image} alt="" />
            <p className='text-center text-xs line-clamp-1'>Mens & Fasion</p>
        </div>
    );
};

export default CategoryCard;