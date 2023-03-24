const reducer = (state = [], action) => {
    if (action.type === 'addToCart') {
        console.log("added to cart")
    } else if (action.type === 'removeFromCart') {
        console.log('removed from cart')
    } else {
        return state;
    }
};

export default reducer
