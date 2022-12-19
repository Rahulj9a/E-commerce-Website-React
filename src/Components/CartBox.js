import React, { useContext } from "react";
import CartContext from "../Context/CartContent/cartContext";

export default function CartBox(props) {
  const a = useContext(CartContext)
     return (
          <div className="z-10 border-2 bg-black   bg-opacity-25  w-72 h-48 overflow-auto rounded-md">
               <h1 >{a.name} </h1>
               {/*  {props.items.map((item) => {})} */}
          </div>
     );
}
