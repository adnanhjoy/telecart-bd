import React from 'react';
import ProductCard from './ProductCard';

const ProductSection: React.FC = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-5 gap-2 mt-4'>
            {
                Array(20).fill(null).map((_, index) =>
                    <ProductCard
                        key={index}
                    />)
            }
        </div>
    );
};

export default ProductSection;
