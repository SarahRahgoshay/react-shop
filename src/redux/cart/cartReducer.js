const initialState = {
    selectedItem: [],
    itemsCounter: 0 ,
    total: 0,
    checkout: false
}

const sumItems = (items) => {
    const itemsCounter = items.reduce((total , product) => total + product.quantity , 0);
    const total = items.reduce((total , product) => total + product.price * product.quantity , 0).toFixed(2);
    return { itemsCounter , total }
    // return {itemscounter:itemsCounter, total:total} chon asme key va value yeki hast khode escma script tashkhis mide
}

const cartReducer = (state = initialState , action) => {
    console.log(state)
    switch(action.type){
        case "ADD_ITEM" : 
            if(!state.selectedItem.find(item => item.id === action.payload.id)){
                state.selectedItem.push({
                    ...action.payload,
                    quantity:1
                })
            }
            return {
                ...state,
                selectedItem: [...state.selectedItem] ,
                ...sumItems(state.selectedItem),
                checkout: false
            }
        case "REMOVE_ITEM" :
            const newSelectedItem = state.selectedItem.filter(item => item.id !== action.payload.id);
            return{
                ...state ,
                selectedItem: [...newSelectedItem],
                ...sumItems(newSelectedItem)
            }
        case "INCREASE" :
            const indexI= state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indexI].quantity++ ;
            return {
                ...state,
                ...sumItems(state.selectedItem)
            } 
        case "DECREASE" :
            const indexD= state.selectedItem.findIndex(item => item.id === action.payload.id); 
            state.selectedItem[indexD].quantity-- ;
            return {
                ...state,
                ...sumItems(state.selectedItem)
            }
        case "CHECKOUT" :
            return{
                selectedItem: [],
                itemsCounter: 0 ,
                total: 0,
                checkout: true
            }   
        case "CLEAR" :
            return {
                selectedItem: [] ,
                itemsCounter: 0,
                total: 0 ,
                checkout: false
            } 
        default :
            return state;           
    }
}

export default cartReducer;