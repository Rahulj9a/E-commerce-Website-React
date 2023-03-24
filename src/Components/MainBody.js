import React, { useState, useEffect } from "react";

import CartBox from "./CartBox";
import ProductBox from "./ProductBox";
import { useSelector } from "react-redux";

export default function MainBody(props) {
     
     const { items, loading } = useSelector(  (state) =>   state.items);
     let itemList = items.itemlist 
     console.log(loading)
     console.log(itemList)


     if (loading) {
          return <div>Loading...</div>;
     } else {
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
                         <CartBox list={itemList} />
                    </div>
                
                    {itemList.map((item) => {
                         let id = item.aboutText.id
                         console.log(id);
                         return (
                              <ProductBox
                                   key={id}
                                   item={item}
                              />
                         );
                    
                    })}
                
               </div>
          );
     }
}
