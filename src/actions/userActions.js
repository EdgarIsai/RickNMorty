import axios from 'axios';

import {BRING_ALL, ERROR, LOADING} from '../types/usersTypes'
export const bringAll = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const userRequest = await axios.get('https://rickandmortyapi.com/api/character')
        dispatch({
            type: BRING_ALL,
            payload: userRequest.data.results
        })
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}