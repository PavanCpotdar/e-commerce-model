
//Action Type  
const ADD_ITEM_TO_CARD = "ADD_ITEM_TO_CARD";
const DELETE_ITEM_FROM_CARD = "DELETE_ITEM_FROM_CARD";
const DECREASE_ITEM_FROM_CARD = "DECREASE_ITEM_FROM_CARD";
const INCREASE_ITEM_FROM_CARD = "INCREASE_ITEM_FROM_CARD";


// Action creater

export const addItemToCard = (productDetail) => {
    return {
        type: ADD_ITEM_TO_CARD,
        payload: productDetail
    }
}
export const deleteCartItem = (cartItem) => {
    return {
        type: DELETE_ITEM_FROM_CARD,
        payload: cartItem
    }
}
export const decreaseCartItem = (cartItem) => {
    return {
        type: DECREASE_ITEM_FROM_CARD,
        payload: cartItem
    }
}

export const increaseCartItem = (cartItem) => {
    return {
        type: INCREASE_ITEM_FROM_CARD,
        payload: cartItem
    }
}

export const cardReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CARD:

            const productExisted = state.find(cartItem => cartItem.id === action.payload.id);

            if (productExisted) {
                return state.map((cartItem) => {
                    if (cartItem.id === productExisted.id) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 }
                    }
                    return cartItem
                })
            }

            return [...state, { ...action.payload, quantity: 1 }]

        case DELETE_ITEM_FROM_CARD:
            return state.filter((cartItem) => cartItem.id !== action.payload.id)

        case DECREASE_ITEM_FROM_CARD:
            let finalState = []
             state.forEach((cartItem) => {
              
                 if (cartItem.id === action.payload.id) {
                    
                    if(action.payload.quantity===1){
                        return false
                    }else{
                        finalState.push({ ...cartItem, quantity: (action.payload.quantity - 1) })  
                    }
                }
               else{
                finalState.push(cartItem)
               }
            
                 
            })
           
            return finalState
            
           

        case INCREASE_ITEM_FROM_CARD:
            return state.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    return { ...cartItem, quantity: (action.payload.quantity + 1) }
                }
                return cartItem
            })


        default:
            return state

    }
}