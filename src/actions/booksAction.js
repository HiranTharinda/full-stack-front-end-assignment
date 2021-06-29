import axios from 'axios';
import {
    GET_BEST_SELLER_BOOKS,
    GET_BEST_SELLER_BOOKS_FAILED
} from './types';

export const getBestSellingBooks = (data) => async dispatch => {
    const api_key = 'kejAhwRat3GkPqI4tLiCaU2AHSzzfwYu';
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${api_key}`;
    try {
        await axios.get(url, data)
            .then(res =>
                dispatch({
                    type: GET_BEST_SELLER_BOOKS,
                    payload: res.data,
                })
            )
    } catch (err) {
        dispatch({
            type: GET_BEST_SELLER_BOOKS_FAILED,
            payload: err,
        })
    }
};