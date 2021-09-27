import axios from 'axios'
import * as types from '../types'

export const fetchproducts =()=>async dispatch=>{
//     const res = await axios.get('https://fakestoreapi.com/products');
    dispatch({
        type: types.GET_PRODUCTS,
        payload: ['1st post', '2nd post']
    });
}
