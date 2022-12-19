import React, { useState } from "react";
import { useEffect } from "react";
import CartBox from "./CartBox";
import ProductBox from "./ProductBox";

export default function MainBody(props) {
     const [itemList, setitemList] = useState([]);
     useEffect(() => {
          fetch("./productDetail.json").then((res) =>
               res.json().then((data) => setitemList(data.itemlist)),
          );
     }, []);

     const [CartBoxItems, setCartBoxItems] = useState([]);

     function addInCart(item) {
          setCartBoxItems(CartBoxItems + item);
     }

     return (
          <div
               w-full
               h-full
               border-2
               border-red
               relative
          >
               <div
                    id="CartCorner"
                    className="absolute m-auto right-0 top-16"
                    style={{ display: `${props.cartBoxVisibility}` }}
               >
                    <CartBox items={CartBoxItems} />
               </div>
                
                    {itemList.map((item) => {
                         return (
                              <ProductBox
                                   item={item}
                                   key={item.id}
                              />
                         );
                    })}
                
          </div>
     );
}
