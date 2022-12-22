import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import MainBody from "./Components/MainBody";
import CartState from "./Context/CartContent/CartState";


function App() {
     const [showCartBox, setshowCartBox] = useState("none");
     function cartBoxVisibility() {
          if (showCartBox === "flex") {
               setshowCartBox("none");
          } else {
               setshowCartBox("flex");
          }
     }
     let navbarLinks = [
          {
               name: "Collections",
               link: "/",
          },
          {
               name: "Men",
               link: "/men",
          },
          {
               name: "Women",
               link: "/women",
          },
          {
               name: "About",
               link: "/about",
          },
          {
               name: "Contact",
               link: "/contact",
          },
     ];
     return (
          <>
               <CartState>
                    <div className="lg:w-9/12 md:w-11/12 sm:w-11/12 absolute m-auto left-0 right-0 h-full ">
                         <div  >
                              <Navbar
                                   logo="./images/logo.svg"
                                   navLinks={navbarLinks}
                                   userPic="./images/image-avatar.png"
                                   cartBoxVisibility={cartBoxVisibility}
                              />
                         </div>
                         <div className="h-6/12 ">
                              <MainBody cartBoxVisibility={showCartBox} />
                         </div>
                    </div>
               </CartState>
          </>
     );
}

export default App;
