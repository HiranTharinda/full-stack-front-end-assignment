import {
    GET_BEST_SELLER_BOOKS,
    GET_BEST_SELLER_BOOKS_FAILED
} from '../actions/types';

const initialState = {
    books: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BEST_SELLER_BOOKS:
            return {
                books: action.payload.results.books,
            };
        case GET_BEST_SELLER_BOOKS_FAILED:
            return {
                books: 'failed',
            };
        default:
            return state;
    }
}