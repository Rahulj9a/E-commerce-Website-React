import React from "react";

import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../State/action-creator";

export default function CartBoxModels(props) {
     const dispatch = useDispatch();

     const removeItem = () => {
          dispatch(removeItemFromCart());
     };

     return (
          <div className="w-full px-1 py-2 h-32 border-2">
               <div className="w-full h-2/3 flex items-center px-1 justify-between">
                    <div className=" h-14 w-14">
                         <img
                              className="w-full h-full"
                              src={props.item.images.thumbnail[0]}
                              alt="product"
                         />
                    </div>
                    <div>
                         <h2 className="text-sm text-gray-500">
                              {props.item.name}
                         </h2>
                         <p>
                              <span className="text-sm text-gray-500">
                                   {`$${
                                        (props.item.discount.percent / 100) *
                                        props.item.price
                                   } x ${props.quan}`}{" "}
                              </span>
                              <span className="font-bold">
                                   {`${
                                        (props.item.discount.percent / 100) *
                                        props.item.price *
                                        props.quan
                                   }`}
                              </span>
                         </p>
                    </div>
                    <button
                         onClick={removeItem}
                         className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-200">
                         <img
                              src="./images/icon-delete.svg"
                              className="hover:fill-black"
                              alt="delete"
                         />
                    </button>
               </div>
               <div className="w-full border-2 border-green-500 h-1/3">
                    <button />
               </div>
          </div>
     );
}
