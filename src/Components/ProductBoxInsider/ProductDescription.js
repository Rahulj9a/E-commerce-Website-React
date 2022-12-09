import React, { useState } from "react";

export default function ProductDescription(props) {
     const [addQuantity, setaddQuantity] = useState(0);
 
     function increaseLocalQuan() {
           
          setaddQuantity(addQuantity+1)
     }
     function decreaseLocalQuan() {
           
          if(addQuantity) setaddQuantity(addQuantity-1);
     }
     return (
          <div className="w-full  border-2 border-blue-600 p-2 flex">
               <div>
                    <h2 className="text-orange-400">
                         {props.aboutText.companyname} Company
                    </h2>
                    <h3>{props.aboutText.name}</h3>
                    <p>{props.aboutText.description}</p>
                    <div id="priceDetails">
                         {props.aboutText.discount.active && (
                              <div className="flex gap-2">
                                   <div
                                        id="discountedPrice"
                                        className="text-lg"
                                   >
                                        $
                                        {props.aboutText.price *
                                             (props.aboutText.discount.percent /
                                                  100)}
                                   </div>
                                   <p
                                        id="discount"
                                        className="px-2 rounded-md text-orange-600 bg-orange-100"
                                   >
                                        {props.aboutText.discount.percent}%
                                   </p>
                              </div>
                         )}

                         <div
                              id="realandDiscount"
                              className="text-xs text-gray-600"
                         >
                              <p>${props.aboutText.price}</p>
                         </div>
                    </div>
                    <div>
                         <div className="flex">
                              <button
                                   className="px-2 py-2"
                                   onClick={decreaseLocalQuan}
                              >
                                   <img src="./images/icon-minus.svg" />
                              </button>
                              <div className="px-8 py-2">{addQuantity}</div>
                              <button
                                   className="px-2 py-2"
                                   onClick={increaseLocalQuan}
                              >
                                   <img src="./images/icon-plus.svg" />
                              </button>
                         </div>
                         <div>
                              <button className="border-2">ADD TO CART</button>
                         </div>
                    </div>
               </div>
          </div>
     );
}
