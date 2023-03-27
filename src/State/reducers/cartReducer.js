const initialState = {
     
};

const cartReducer = (state = initialState, action) => {
     if (action.type === "addToCart") {
         state = { ...state, [action.payload.id]: action.payload.quantity }
         
         return state
     } else if (action.type === "removeFromCart") {
         state = delete state[action.id]
         
       return state
     } else {
          return state;
     }
};

export default cartReducer;
