import React from 'react'
import Category from '../../components/home/sidebar/Category';

const Home: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-8 gap-4'>
                {/* sidebar */}
                <div className='col-span-2 border'>
                    <Category />
                </div>
                {/* outlet */}
                <div className='col-span-6'>
                    <h1>Outlet</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;