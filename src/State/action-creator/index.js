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
