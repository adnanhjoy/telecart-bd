import { Drawer } from 'antd';
import React from 'react';
import CartProduct from '../card/CartProduct';


interface CartDrawerProps {
    onClose: () => void;
    drawerOpen: boolean;
}


const CartDrawer: React.FC<CartDrawerProps> = ({ onClose, drawerOpen }) => {
    return (
        <div>
            <Drawer title="Cart" placement="right" onClose={onClose} open={drawerOpen}>
                {
                    Array(4).fill(undefined).map((_, idx) =>
                        <CartProduct 
                        key={idx}
                        />
                    )
                }
            </Drawer>
        </div>
    );
};

export default CartDrawer;