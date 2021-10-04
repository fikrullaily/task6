import * as types from '../types'
const initialState ={
    products: [],
    product: {},
    loading: true, 
}

export default function productReducer (state = initialState, action) {
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
        case types.EDIT_PRODUCTS:       //ini bingung karena ga muncul
            return{
                ...state,
                products: state.products.map((product) =>
                    Number(product.id) === Number(action.payload.id)
                    ? (product = action.payload)
                    : product
                ),
                loading: false,
            };
        case types.PRODUCTS_ERROR:
            return{
                loading:false,
                error: action.payload,
            };
        case types.DELETE_PRODUCTS:       //ini juga masih bingung
            const filteredState = state.products.filter(
                (product) => product.id !== action.payload.id
            );
            return { 
                ...state,
                products: filteredState
            };
            // return {
            //     ...state,
            //     loading: false
            // };
            
        default:
            return state;
        
    }
}