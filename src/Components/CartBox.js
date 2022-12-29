import React, { useContext } from "react";
import CartContext from "../Context/CartContent/cartContext";
import CartBoxModels from "./CartBoxModels";

export default function CartBox(props) {
     const cartDetails = useContext(CartContext);
      

     let productsSelected = Object.values(cartDetails.items);

     console.log(productsSelected);
     return (
          <div className="z-10 border-2 bg-white  w-72 h-48 overflow-auto rounded-md">
               {productsSelected.map((item, index) => {
                    if (!item.amount) {
                         productsSelected.splice(index, 0)
                    } else {
                         return (<CartBoxModels item={item} className={`${!item.amount ? "block" : "hidden"}`} />)
                    }
               })}
          </div>
     );
}
