import React, { useState } from "react";
import ProductDescription from "./ProductBoxInsider/ProductDescription";
import ProductVisual from "./ProductBoxInsider/ProductVisual";
import LargePreview from "./LargePreview";

export default function ProductBox(props) {
     const [shouldShow, setshouldShow] = useState(false);

     let changeVis = () => {
          if (shouldShow) {
               setshouldShow(false);
          } else {
               setshouldShow(true);
          }
     };

     return (
          <div>
               {shouldShow && (
                    <LargePreview item={props.item} changeVis={changeVis} />
               )}
               <div className="absolute w-full   gap-4 flex md:flex-row flex-col md:self-center  md:items-start">
                    <div className="md:w-1/2 w-11/12 h-full flex items-center">
                         <ProductVisual
                              className="flex"
                              mainImages={props.item.images.main}
                              thumbnails={props.item.images.thumbnail}
                              showFull={changeVis}
                              altComp={props.item.name}
                         />
                    </div>
                    <div className="md:w-1/2 w-11/12 self-center h-fit flex items-center">
                         <ProductDescription
                              aboutText={props.item}
                              thumbnail={props.item.images.thumbnail[0]}
                         />
                    </div>
               </div>
          </div>
     );
}
