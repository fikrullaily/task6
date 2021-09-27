import * as types from '../types'
const initialState ={
    products: [],
    product: {},
    loading: true,
    // error: null
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return{
                ...state,
                products: action.payload,
                loading: false,
                
            };
        case types.ADD_PRODUCTS:
            return{
                ...state,
                products: state.products.concat(action.payload),
                loading: false,
            };
        case types.EDIT_PRODUCTS:
            return{
                ...state,
                products: state.products.concat(action.payload),
                loading: false,
            };
        case types.PRODUCTS_ERROR:
            return{
                loading:false,
                error: action.payload,
            };
        case types.DELETE_PRODUCTS:
            return {
                ...state,
                loading: false
            };
            
        default:
            return state
        
    }
}
