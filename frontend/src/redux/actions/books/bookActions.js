import { BOOK_UPDATE_FAIL, BOOK_UPDATE_REQUEST, BOOK_UPDATE_SUCCESS, CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, FETCH_BOOK_FAIL, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS } from "./actionTypes";
import axios from 'axios';


const createBookAction = bookData => {
    return async dispatch => {
       try {
        dispatch({
            type: CREATE_BOOK_REQUEST,
        });

    const config = {
        'Content-Type':'application/json',
    };
    const { data } = await axios.post('/api/books', bookData, config);

    dispatch({
        type: CREATE_BOOK_SUCCESS,
        payload: data,
    });

   

    } catch (error) {
        dispatch({
            type:CREATE_BOOK_FAIL, 
            payload: error.response && error.response.data.message,
        });
    }

    };
};
//Action creator for updating a book 
const updateBookAction = (bookId, updatedBookData) =>{
    return async (dispatch) => {
        try {
            dispatch ({
                type: BOOK_UPDATE_REQUEST,
            });
            const config = {
                'Content-Type': 'application/json',
            };
// Make an HTTP PUT request to update the book by its ID
const { data } = await axios.put (`/:id`, updatedBookData, config);

dispatch ({
    type: BOOK_UPDATE_SUCCESS,
    payload: data,
});
} catch (error) {
    dispatch ({
        type: BOOK_UPDATE_FAIL,
        payload: error.response && error.response.data.message,
    });
}
};
};
//Fetch all books action
const fetchBooksAction = () =>{
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_BOOK_REQUEST,
            });
            const config = {
                headers: {
                    'Content-type':"application/json",
                }
            }
//make http call to our backend 
        const {data} =  await axios.get ('/api/books', config);
        dispatch ({
            type:FETCH_BOOK_SUCCESS,
            payload: data,
        });
        
        } catch (error){
            dispatch({
                type: FETCH_BOOK_FAIL,
                payload:error.response && error.response.data.message,
            });

        }
    };
};
export {createBookAction,fetchBooksAction, updateBookAction};