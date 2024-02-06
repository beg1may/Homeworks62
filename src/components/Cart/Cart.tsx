import React from 'react';
import CartItem from "./CartItem";
import {CartDish} from "../../types";

interface Props {
    cartDishes: CartDish[];
}

const Cart: React.FC<Props> = ({cartDishes}) => {
    const total = cartDishes.reduce((sum, cartDish) => {
        return sum + cartDish.amount * cartDish.dish.price;
    }, 0);

    let cart = (
        <div className="alert alert-primary">
            Cart is empty! Add something!
        </div>
    );

    if (cartDishes.length > 0) {
        cart = (
            <>
                {cartDishes.map(cartDish => (
                    <CartItem
                        key={cartDish.dish.id}
                        cartDish={cartDish}
                    />
                ))}
                <div className="card border-0 p-2">
                    <div className="row">
                        <div className="col text-right">
                            Total:
                        </div>
                        <div className="col-3 text-right">
                            <strong>{total}</strong> KGS
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div>
            <h4>Cart</h4>
            {cart}
        </div>
    );
};

export default Cart;