import React, { useState } from "react";

export default function LargePreview(props) {
     const [shownImgIndex, setshownImgIndex] = useState(0);
     const [windowSrc, setwindowSrc] = useState(props.item.images.main[0]);
     let previousImg = () => {
          if (props.item.images.main[shownImgIndex - 1]) {
               setshownImgIndex(shownImgIndex - 1);
               setwindowSrc(props.item.images.main[shownImgIndex - 1]);
          } else {
               setshownImgIndex(props.item.images.main.length - 1);
               setwindowSrc(
                    props.item.images.main[props.item.images.main.length - 1],
               );
          }
     };
     let nextImg = () => {
          if (props.item.images.main[shownImgIndex + 1]) {
               setshownImgIndex(shownImgIndex + 1);
               setwindowSrc(props.item.images.main[shownImgIndex + 1]);
          } else {
               setshownImgIndex(0);
               setwindowSrc(props.item.images.main[0]);
          }
     };

     return (
          <div
               id="FullWindow"
               className="w-full h-full border-2 bg-transparent  bg-opacity-10 flex absolute z-20 justify-center">
               <div className="w-full  lg:w-7/12  self-center relative">
                    <button
                         className="absolute m-auto top-2 right-2 p-1 items-center rounded-full hover:bg-slate-800 hover:bg-opacity-20 flex"
                         onClick={props.changeVis}>
                         <img
                              src="./images/icon-close.svg"
                              alt="close preview"
                         />
                    </button>
                    <button
                         className="absolute m-auto top-0 left-2 flex h-6 w-6 justify-center bottom-0 p-1 rounded-full hover:bg-slate-800 hover:bg-opacity-20 "
                         onClick={previousImg}>
                         <img src="./images/icon-previous.svg" alt="previous" />
                    </button>
                    <button
                         className="absolute m-auto top-0 right-2 bottom-0 p-1 h-6 w-6 justify-center rounded-full hover:bg-slate-800 hover:bg-opacity-20 flex"
                         onClick={nextImg}>
                         <img src="./images/icon-next.svg" alt="next" />
                    </button>
                    <img
                         className="rounded-md"
                         src={windowSrc}
                         alt="product preview"
                    />
               </div>
          </div>
     );
}
