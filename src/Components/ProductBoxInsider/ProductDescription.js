import React, { useState, useContext}  from "react";
import cartContext from "../../Context/CartContent/cartContext";

export default function ProductDescription(props) {
     const cartDetails = useContext(cartContext)
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
                              <div className="flex gap-2 items-center">
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
                                        className="px-2 rounded-md text-sm text-orange-600 bg-orange-100 text-center flex items-center h-fit"
                                   >
                                        {props.aboutText.discount.percent}%
                                   </p>
                              </div>
                         )}

                         <div
                              id="realandDiscount"
                              className="text-xs text-gray-600"
                         >
                              <del>${props.aboutText.price}</del>
                         </div>
                    </div>
                    <div className="flex items-center">
                         <div className="flex w-2/6">
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
                         <div className="w-4/6">
                              <button className="flex w-full items-center justify-center gap-2 rounded-md text-white bg-orange-500 py-1 hover:opacity-60 hover:border-orange-600 hover:border-2"
                              /* onClick={changeCart} */>
                                   <img src="./images/icon-cart.svg" />
                                   <span>ADD TO CART</span>
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
}
