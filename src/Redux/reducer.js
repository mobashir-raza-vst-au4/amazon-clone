let initialState = {
    basket: [],
    user: null
}

function appReducer(state=initialState, action) {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case "SET_USER":
            stateCopy.user = action.payload;
            return stateCopy;

        case "ADD_TO_BASKET":
            // logic for adding item to basket
            stateCopy.basket.push(action.payload);
            return stateCopy;

        case "REMOVE_FROM_BASKET":
            // logic for removing item from basket
            console.log("hello")
            const index = stateCopy.basket.findIndex((basketItem) => {
               return basketItem.id === action.payload
            })
            // console.log(index)
            if(index >= 0) {
                //item exists, and remove it
                stateCopy.basket.splice(index, 1);
                return stateCopy;
            }else {
                console.log("not find")
            }
        default:
          return state;
    }
}

export default appReducer;