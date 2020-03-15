import axios from 'axios';
import {
    READING_LIST_REQUEST,
    READING_LIST_REQUEST_SUCCESS,
    READING_LIST_REQUEST_FAILED
} from './types';

export const GetReadingList = () => {
    return dispatch => {
      dispatch({ type: READING_LIST_REQUEST });
      axios
        .get('https://refind.com/maher-zaidoune.json')
        .then(response => {
          dispatch({ type: READING_LIST_REQUEST_SUCCESS, payload: response });
        })
        .catch(error => {
          dispatch({ type: READING_LIST_REQUEST_FAILED, payload: error });
        });
    };
  };
  