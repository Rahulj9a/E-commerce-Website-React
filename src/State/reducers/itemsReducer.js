const initialState = {
     items: [],
     loading: true,
};

const itemsReducer = (state = initialState, action) => {
     switch (action.type) {
          case "FETCH_ITEMS_REQUEST":
               return { ...state, loading: true };
          case "FETCH_ITEMS_SUCCESS":
               return { ...state, items: action.payload, loading: false };
          default:
               return state;
     }
};

export default itemsReducer;
