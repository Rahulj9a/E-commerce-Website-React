export const fetchItems = () => {
     return async (dispatch) => {
          dispatch({ type: "FETCH_ITEMS_REQUEST"});
          const response = await fetch("/productDetail.json");
          const items = await response.json();
          dispatch({ type: "FETCH_ITEMS_SUCCESS", payload: items });
           
     };
};

export const addItemToCart = (item) => {
     return (dispatch) => {
          dispatch({
               type: "addToCart",
               payload: item,
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
