import axios from "axios";

 const fetchDetailsRequest = () => {
    return {
        type : "FETCH_DETAILS_REQUEST"
    }
}

const fetchDetailsSuccess = product => {
    return {
        type: "FETCH_DETAILS_SUCCESS" ,
        payload: product
    }
}


export const fetchDetails = (id) => {
    return (dispatch) => {
        dispatch(fetchDetailsRequest());
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                const product = response.data;
                dispatch(fetchDetailsSuccess(product))
            })

    }
}


