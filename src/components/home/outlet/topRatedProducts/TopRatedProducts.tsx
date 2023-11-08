import React from 'react';
import HorizontalProductCard from '../../../card/HorizontalProductCard';

const TopRatedProducts: React.FC = () => {
    return (
        <div>
            <h5 className='font-semibold text-primary mb-4'>Top Rated Products</h5>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    Array(9).fill(null).map((_, index) =>
                        <HorizontalProductCard
                            key={index}
                        />)
                }
            </div>
        </div>
    );
};

export default TopRatedProducts;