import axios from 'axios';
import {
    GET_BEST_SELLER_BOOKS,
    GET_BEST_SELLER_BOOKS_FAILED
} from './types';

export const getBestSellingBooks = (data) => async dispatch => {
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`;
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