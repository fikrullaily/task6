import * as types from '../types';
import axios from 'axios';

export const fetchproducts = () => async (dispatch) => {
try {
    const res = await axios.get('https://fakestoreapi.com/products');
    dispatch({
        type: types.GET_PRODUCTS,
        payload: res.data,
    });
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
            .post('https://fakestoreapi.com/products', data)
            .then((response) => {
                dispatch({
                    type: types.ADD_PRODUCTS,
                    payload: response.data,
                });
                console.log(response);
            });
    } catch (error) {
        dispatch({
            type: types.PRODUCTS_ERROR,
            payload: error,
        });
    }
};

export const editProduct = (id, data) => async (dispatch) => {
    try {
        await axios
            .put(`https://fakestoreapi.com/products/${id}`, data)
            .then((response) => {
                dispatch({
                    type: types.EDIT_PRODUCTS,
                    payload: response.data,
                });
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
            .then((response) => {
                dispatch({
                    type: types.DELETE_PRODUCTS,
                    payload: response.data,
                });
                dispatch(fetchproducts());
                console.log(response);
            });
    } catch (error) {
        dispatch({
            type: types.PRODUCTS_ERROR,
            payload: error,
        });
    }
};
