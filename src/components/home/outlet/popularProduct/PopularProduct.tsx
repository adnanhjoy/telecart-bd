import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../productSection/ProductCard';

const PopularProduct: React.FC = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };
    return (
        <div className='my-4'>
            <h5 className='font-semibold text-primary'>Products for you</h5>
            <Slider {...settings}>
                {
                    Array(20).fill(null).map((_, index) =>
                        <ProductCard
                            key={index}
                        />)
                }
            </Slider>
        </div>
    );
};

export default PopularProduct;