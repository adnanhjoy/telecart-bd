import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CartProduct: React.FC = () => {
    const [productQty, setProductQty] = useState<number>(1);

    const handleIncrement = () => {
        if (productQty >= 5) {
            toast.error('You reached maximum limit for this product')
        } else {
            setProductQty(productQty + 1);
        }
    }

    const handleDecrement = () => {
        if (productQty <= 1) {
            toast.error('Minimum select one product');
        }
        else {
            setProductQty(productQty - 1);
        }
    }

    return (
        <div className='flex justify-between border mb-4 p-2 rounded-md gap-2 hover:cursor-pointer'>
            <div className='flex flex-col w-fit items-center'>
                <button onClick={handleIncrement} className='p-1 rounded-full bg-gray-100'>
                    <AiOutlinePlus />
                </button>
                <p>{productQty}</p>
                <button onClick={handleDecrement} className='p-1 rounded-full bg-gray-100'>
                    <AiOutlineMinus />
                </button>
            </div>
            <img className='w-14 h-14' src="https://www.shopz.com.bd/wp-content/uploads/2021/12/LIGE-9866-Men-Quartz-Watch-1.jpg" alt="" />
            <div>
                <p className='text-sm leading-5 line-clamp-2 text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse nostrum, suscipit aliquid quae deleniti iure. Voluptatum, laudantium, esse aliquam earum iure quisquam sit ratione sint sequi odio magnam quis?</p>
            </div>
            <span className='flex items-center gap-1 font-semibold text-primary'>
                <p>2000</p>
                <p className='font-[auto]'>৳</p>
            </span>
        </div>
    );
};

export default CartProduct;