const initialState = {
     items: {},
     loading: true,
};

const itemsReducer = (state = initialState, action) => {
      
     if (action.type === "pending") {
          return { ...state, loading: true };
     }
     else if (action.type === "fullfill") {
           
          return {
               ...state,
               items: Object.assign({}, state.items, action.payload),
               loading: false,
          }
     } 
     else {
          return state
     }
     
};

 

export default itemsReducer;
