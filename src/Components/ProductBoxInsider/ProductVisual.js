import React from "react";

export default function ProductVisual(props) {
     return (
          <div className="flex flex-col w-full h-fit p-2 gap-2">
               <div className=" w-full h-11/12 flex self-center gap-2">
                    <img
                         src={props.mainImages[0]}
                         className="rounded-md"
                         alt={props.altComp || "product"}
                    />
               </div>
               <div className="w-full h-4/12 flex justify-around self-center  ">
                    {props.thumbnails.map((e, index) => {
                         return (
                              <div
                                   className="w-1/5 hover:opacity-60 "
                                   key={index}>
                                   <img
                                        onClick={props.showFull}
                                        id={`thumbnail${index}`}
                                        src={e}
                                        className="rounded-md hover:border-orange-600 hover:border-2 "
                                        alt="different angles of product"
                                   />
                              </div>
                         );
                    })}
               </div>
          </div>
     );
}
