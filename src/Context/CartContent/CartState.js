import React from "react";
import { useContext } from "react";
import { useState } from "react";
import CartContext from "./cartContext";

const CartState = (props) => {
    const s1 = {
        "num": 0,
         
    }
    const s2 = {}
    let [state, setState] = useState(s1)
    let [items,setitems]=useState({})
     
    let updateItems = (addQuantity, id) => {
         
        setState({
            "num": state.num + addQuantity,
        })
        /* setitems(
             items[id]=addQuantity+(items[id]||0)
        ) */
        console.log(state.num, items)
    }
    return (
         <CartContext.Provider value={{ state, updateItems }}>
              {props.children}
         </CartContext.Provider>
    );
}

export default CartState