import React from 'react';
import CategoryCard from './CategoryCard';

const CategorySection: React.FC = () => {
    return (
        <div className='mt-4'>
            <h5 className='font-semibold text-primary'>Product Category</h5>
            <div className='grid grid-cols-2 md:grid-cols-9 gap-2'>
                {
                    Array(9).fill(null).map((_, index) =>
                        <CategoryCard
                            key={index}
                        />)
                }
            </div>
        </div>
    );
};

export default CategorySection;