import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_ERROR = 'GET_FRIENDS_ERROR'

export const getFriends = () => {
    return dispatch => {
        dispatch({ type: GET_FRIENDS_START })
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
            .then( res => {
                console.log(res.data)
                dispatch({ type : GET_FRIENDS_SUCCESS, payload : res.data})
            })
            .catch(err => {
                dispatch({ type : GET_FRIENDS_ERROR, payload : err.response})
            })
    }
}