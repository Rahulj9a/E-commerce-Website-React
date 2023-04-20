import React from "react";

import CartBoxModels from "./CartBoxModels";
import { useSelector } from "react-redux";

export default function CartBox(props) {
     const CartDetails = useSelector((state) => state.cart);
     let { items, loading } = useSelector((state) => state.items);

     if (loading) {
          return <div>loading...</div>;
     }
     return (
          <div className="z-10 border-2 bg-white  w-72 h-48 overflow-auto rounded-md">
               {Object.keys(CartDetails).map((selecteditem) => (
                    <CartBoxModels
                         item={items[selecteditem]}
                         quan={CartDetails[selecteditem]}
                    />
               ))}
          </div>
     );
}
