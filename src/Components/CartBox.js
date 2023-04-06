import React, { useContext } from "react";
import CartContext from "../Context/CartContent/cartContext";
import CartBoxModels from "./CartBoxModels";
import { useSelector } from "react-redux";

export default function CartBox(props) {
     const CartState = useSelector((state)=>state.cart)
     

     const { items } = useSelector((state) => state.items);
     let itemList = items.itemlist; 
      
     let productsSelected = Object.keys(CartState)

     
     return (
          <div className="z-10 border-2 bg-white  w-72 h-48 overflow-auto rounded-md">
               {productsSelected.map((item, index) => {
                    if (!item.amount) {
                         productsSelected.splice(index, 0)
                         return
                    } else { 
                         return (<CartBoxModels item={item} className={`${!item.amount ? "block" : "hidden"}`} />)
                    }
               })}
          </div>
     );
}
