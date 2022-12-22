import React,{useContext,useEffect} from "react";
import cartContext from "../Context/CartContent/cartContext";

function Navbar(props) {
     let cartDetails =  useContext(cartContext) 
     
     return (
          <div className="md:h-24 h-12 ">
               <div className="md:h-20 h-10 flex borderb-1px justify-between">
                    <div className="flex h-full">
                         <div
                              id="logo"
                              className="self-center mx-3"
                         >
                              <img
                                   src={`${props.logo}`}
                                   alt="sketchers logo"
                              />
                         </div>
                         <div
                              id="Navlinks"
                              className="self-center lg:flex hidden gap-6 ml-8 font-semibold font-mono h-20 overflow-auto"
                         >
                              {props.navLinks.map((elements) => {
                                   return (
                                        <div
                                             key={elements.name}
                                             className="links h-20 hover:border-b-orange-400 border-b-transparent border-b-4 flex"
                                        >
                                             <a
                                                  href={elements.link}
                                                  className="self-center mx-1"
                                             >
                                                  {elements.name}
                                             </a>
                                        </div>
                                   );
                              })}
                         </div>
                    </div>
                    <div className="flex relative md:px-10 px-3 h-full items-center md:gap-10 gap-3">
                         <button
                              id="cartLogoBox "
                              onClick={props.cartBoxVisibility}
                              className="relative w-7 h-7"
                         >
                              <img
                                   src="./images/icon-cart.svg"
                                   alt="kart logo"
                                   className="w-6"
                              />
                                
                                   <div className={`w-5 h-4 rounded-md bg-orange-400 absolute m-auto -top-1 -right-1 text-center text-xs text-white ${cartDetails.state.num?"block":"hidden"}`}>
                                        {cartDetails.state.num}
                                   </div>
                               
                         </button>
                         <div
                              id="userPicBox"
                              className="md:w-10 w-7 hover:border-orange-400 border-transparent rounded-full border-2"
                         >
                              <img
                                   src={props.userPic}
                                   alt="user"
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Navbar;
