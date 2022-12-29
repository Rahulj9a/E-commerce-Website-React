import React from "react";
import { useContext } from "react";
import { useState } from "react";
import CartContext from "./cartContext";

const CartState = (props) => {
     const s1 = {
          num: 0,
     };

     let [state, setState] = useState(s1);
     let [items, setitems] = useState({});

     let updateItems = (addQuantity, id, details) => {
          let amount = (items[id] ? items[id]["amount"] : 0) + addQuantity;

          setState({
               num: state.num + addQuantity,
          });

          setitems((alreadyItems) => ({
               ...alreadyItems,
               [id]: {
                    id: id,
                    image: details.image,
                    productname: details.productname,
                    price: details.price,
                    discount: details.discount,
                    amount: amount,
               },
          }));
     };
    const removeItem = (id) => {
         const newItem = delete items[id]
         setitems(newItem)
           
          setState({
               num: 0
          });   
         
     };
     return (
          <CartContext.Provider value={{ state, items, updateItems, removeItem }}>
               {props.children}
          </CartContext.Provider>
     );
};

export default CartState;
