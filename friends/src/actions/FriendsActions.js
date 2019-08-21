import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Action } from 'rxjs/internal/scheduler/Action';

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


export const ADD_FRIEND_START = 'ADD_FRIEND_START'
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_ERROR = 'ADD_FRIEND_ERROR'

export const addFriend = (friend) => {
    return dispatch => {
    dispatch({ type : ADD_FRIEND_START})
    axiosWithAuth()
        .post('http://localhost:5000/api/friends', friend)
        .then( res => {
            dispatch({ type : ADD_FRIEND_SUCCESS , payload: res.data})
        })
        .catch( err => {
            dispatch({ type: ADD_FRIEND_ERROR, payload : err.response })
        })
    }
}