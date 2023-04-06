export const fetchItems = () => {
     return async(dispatch) => {
          dispatch({ type: "pending", payload:"ok"});
          const response = await fetch("/productDetail.json");
          const items = await response.json();
          
          dispatch({ type: "fullfill", payload: items });
           
     };
};

export const addItemToCart = (details) => {
     return (dispatch) => {
          dispatch({
               type: "addToCart",
               payload: details,
          });
     };
     
};
export const removeItemFromCart = (id) => {
     return (dispatch) => {
          dispatch({
               type: "removeFromCart",
               payload: id,
          });
     };
};
