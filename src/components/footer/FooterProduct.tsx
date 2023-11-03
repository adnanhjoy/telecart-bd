import React from 'react';
import FooterProductCard from './FooterProductCard';

const FooterProduct: React.FC = () => {
    return (
        <div>
            <p className='uppercase tracking-widest'>products</p>
            <div className='flex flex-col gap-2 mt-4'>
                <FooterProductCard />
                <FooterProductCard />
                <FooterProductCard />
            </div>
        </div>
    );
};

export default FooterProduct;