import React from "react";
import ProductDescription from "./ProductBoxInsider/ProductDescription";
import ProductVisual from "./ProductBoxInsider/ProductVisual";

export default function ProductBox(props) {
     
     return (
          <div key={props.key}>
               <div className="absolute w-full h-full gap-2 flex md:flex-row flex-col md:self-center items-center md:items-start">
                    <div className="md:w-1/2 w-11/12 h-full flex items-center">
                         <ProductVisual
                              className="flex"
                              mainImages={props.item.images.main}
                              thumbnails={props.item.images.thumbnail}
                         />
                    </div>
                    <div className="md:w-1/2 w-11/12 h-full border-2 border-green-600 flex items-center">
                         <ProductDescription aboutText={props.item.aboutText} />
                    </div>
               </div>
          </div>
     );
}
