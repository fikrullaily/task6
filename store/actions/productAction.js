import * as types from '../types';
import axios from 'axios';

export const fetchproducts = () => async (dispatch) => {
try {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    dispatch({
        type: types.GET_PRODUCTS,
        payload: res.data,
    });
    console.log(res);
} catch (error) {
    dispatch({
        type: types.PRODUCTS_ERROR,
        payload: error,
    });
    }
};

export const addProduct = (data) => async (dispatch) => {
    try{
        await axios
            .post(`https://fakestoreapi.com/products`, data)
            .then((res) => {
                dispatch({
                    type: types.ADD_PRODUCTS,
                    payload: res.data,
                });
                console.log(res);
            });
    } catch (error) {
        dispatch({
            type: types.PRODUCTS_ERROR,
            payload: error,
        });
    }
};

// export const editProduct = (id, data) => async (dispatch) => {
export const editProduct = (product) => async (dispatch) => {
    try {
        await axios
            // .put(`https://fakestoreapi.com/products/${id}`, data)
            .put(`https://fakestoreapi.com/products/${product.id}`, product)
            .then((res) => {
                dispatch({
                    type: types.EDIT_PRODUCTS,
                    payload: res.data,
                });
                console.log(res);
            });
    } catch (error) {
        dispatch({
            type: types.PRODUCTS_ERROR,
            payload: error,
        });
    }
};

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await axios 
            .delete(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                dispatch({
                    type: types.DELETE_PRODUCTS,
                    payload: res.data,
                });
                // dispatch(fetchproducts());
                console.log(res); //kalo projek console di hapus karen abiar nanti ga ke hack
            });
    } catch (error) {
        dispatch({
            type: types.PRODUCTS_ERROR,
            payload: error,
        });
    }
};
