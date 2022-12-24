import React from "react";
import { useContext } from "react";
import { useState } from "react";
import CartContext from "./cartContext";

const CartState = (props) => {
    const s1 = {
        "num": 0,
         
    }
     
        
    
    let [state, setState] = useState(s1)
    let [items,setitems]=useState({})
     
    let updateItems = (addQuantity, id) => {
         console.log(addQuantity,id)
        setState({
            "num": state.num + addQuantity,
        })
        
        setitems(alreadyItems   => ({
            ...alreadyItems,
            [id]: (items[id]||0)+addQuantity
        })
             
        )
        console.log(state.num, items)
    }
    return (
         <CartContext.Provider value={{state,items,updateItems }}>
              {props.children}
         </CartContext.Provider>
    );
}

export default CartState