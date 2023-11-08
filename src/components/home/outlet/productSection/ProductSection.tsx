import React from 'react';
import ProductCard from '../../../card/ProductCard';

const ProductSection: React.FC = () => {
    return (
        <div className='mt-4'>
            <h5 className='font-semibold text-primary'>Products for you</h5>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-2'>
                {
                    Array(20).fill(null).map((_, index) =>
                        <ProductCard
                            key={index}
                        />)
                }
            </div>
        </div>
    );
};

export default ProductSection;
