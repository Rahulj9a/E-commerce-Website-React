const initialState = {
     
};

const cartReducer = (state = initialState, action) => {
 
     
     if (action.type === "addToCart") {
          state = Object.assign({}, state, action.payload)
         
         return state
     } else if (action.type === "removeFromCart") {
         state = delete state[action.id]
         
       return state
     } else {
          return state;
     }
};

export default cartReducer;
