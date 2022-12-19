import React from "react";
import CartContext from "./cartContext";

const CartState = (props) => {
    const state = {
        "items":1
    }
    return (
        <CartContext.Provider value={state}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState