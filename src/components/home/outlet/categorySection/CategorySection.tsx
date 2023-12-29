import React from 'react';
import CategoryCard from './CategoryCard';
import Slider from 'react-slick';
import { categorySettings } from '../../../../utilities/carousel.config';

const CategorySection: React.FC = () => {
    return (
        <div className='mt-4'>
            <h5 className='font-semibold text-primary'>Product Category</h5>
            <Slider {...categorySettings}>
                {
                    Array(20).fill(null).map((_, index) =>
                        <CategoryCard
                            key={index}
                        />)
                }
            </Slider>
        </div>
    );
};

export default CategorySection;