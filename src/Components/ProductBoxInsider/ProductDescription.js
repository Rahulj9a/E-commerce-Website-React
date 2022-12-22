import React, { useState, useContext, useEffect}  from "react";
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
     function updateinCart(){
          cartDetails.updateItems(addQuantity, props.aboutText.id)
          setaddQuantity(0)
     }
      
     return (
          <div className="w-full p-2 flex ">
               <div className="flex flex-col gap-4">
                    <h2 className="text-orange-400 font-medium text-lg">
                         {props.aboutText.companyname} Company
                    </h2>
                    <h3 className="font-semibold text-5xl py-4">
                         {props.aboutText.name}
                    </h3>
                    <p className="py-4 text-gray-700">
                         {props.aboutText.description}
                    </p>
                    <div id="priceDetails">
                         {props.aboutText.discount.active && (
                              <div className="flex gap-2 items-center">
                                   <div
                                        id="discountedPrice"
                                        className="text-lg font-bold"
                                   >
                                        {`$
                                        ${
                                             props.aboutText.price *
                                             (props.aboutText.discount.percent /
                                                  100)
                                        }.00`}
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
                              className="text-xs text-gray-600 font-medium"
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
                                   <img
                                        className="hover:opacity-80"
                                        src="./images/icon-minus.svg"
                                   />
                              </button>
                              <div className="px-8 py-2">{addQuantity}</div>
                              <button
                                   className="px-2 py-2"
                                   onClick={increaseLocalQuan}
                              >
                                   <img
                                        className="hover:opacity-80"
                                        src="./images/icon-plus.svg"
                                   />
                              </button>
                         </div>
                         <div className="w-4/6">
                              <button
                                   className="flex w-full items-center justify-center gap-2 rounded-md text-white bg-orange-500 py-1 hover:opacity-60 hover:border-orange-600 hover:border-2"
                                   onClick={updateinCart}
                              >
                                   <img src="./images/icon-cart.svg" />
                                   <span>ADD TO CART</span>
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
}
