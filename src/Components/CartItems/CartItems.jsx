import React, { useContext } from 'react';
import { ShopContext } from '../../Contexts/ShopContexts';
import remove_icon from '../Assets/cart_cross_icon.png'; // Ensure correct path
import './CartItems.css';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            

            
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format">
                                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>₹{e.new_price}</p>
                                <p>{cartItems[e.id]}</p>
                                <p>₹{cartItems[e.id] * e.new_price}</p>
                                <img 
                                    src={remove_icon} 
                                    onClick={() => removeFromCart(e.id)} 
                                    alt="Remove" 
                                    className="cart-remove-icon" 
                                />
                               
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null; 
            })}
        </div>
    );
};

export default CartItems; // ✅ Now it's a default export
