const initialState = {
    loading: false,
    product: [],

}

const detailsReducer = (state= initialState , action) => {
    switch(action.type){
        case "FETCH_DETAILS_REQUEST" :
            return {
                ...state,
                loading: true
            }
        case "FETCH_DETAILS_SUCCESS" :
            return {
                loading: false,
                product: action.payload
            }  
        default :
            return state     
    }
}

export default detailsReducer;