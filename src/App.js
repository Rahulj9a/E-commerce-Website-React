import "./App.css";
import React, { useState, useEffect } from "react";

import Navbar from "./Components/Navbar";
import MainBody from "./Components/MainBody";

import { useDispatch } from "react-redux";
import { fetchItems } from "./State/action-creator/index";

function App() {
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(fetchItems());
     }, []);

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
          <div className="lg:w-9/12 md:w-11/12 sm:w-11/12 absolute m-auto left-0 right-0 h-full">
               <Navbar
                    logo="./images/logo.svg"
                    navLinks={navbarLinks}
                    userPic="./images/image-avatar.png"
                    cartBoxVisibility={cartBoxVisibility}
               />

               <MainBody cartBoxVisibility={showCartBox} />
          </div>
     );
}

export default App;
