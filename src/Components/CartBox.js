import React, { useContext } from "react";
import CartContext from "../Context/CartContent/cartContext";

export default function CartBox(props) {
  const cartDetails = useContext(CartContext)
     return (
          <div className="z-10 border-2 bg-black   bg-opacity-25  w-72 h-48 overflow-auto rounded-md">
               {props.list.map(e => {
                    let id = e.aboutText.id
                    if (cartDetails.items[id]) {
                         return (<h2>{`${id}=${cartDetails.items[id]}`}</h2>)
                  }
             })}
          </div>
                
     );
}
