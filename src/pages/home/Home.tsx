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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores distinctio sit id minima repudiandae laudantium, ut alias explicabo soluta unde ratione fugiat iste quasi debitis. Eius itaque facere consequatur provident.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;