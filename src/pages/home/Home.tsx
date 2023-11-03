import React from 'react'
import Category from '../../components/home/sidebar/Category';
import BannerSlider from '../../components/home/outlet/BannerSlider';
import SearchSection from '../../components/home/outlet/searchSection/SearchSection';
import ProductSection from '../../components/home/outlet/productSection/ProductSection';
import CategorySection from '../../components/home/outlet/categorySection/CategorySection';

const Home: React.FC = () => {
    return (
        <div className='container mx-auto my-4'>
            <div className='grid grid-cols-8 gap-4'>
                {/* sidebar */}
                <div className='col-span-2 border'>
                    <Category />
                </div>
                {/* outlet */}
                <div className='col-span-6'>
                    <SearchSection />
                    <BannerSlider />
                    <CategorySection />
                    <ProductSection />
                </div>
            </div>
        </div>
    );
};

export default Home;