import {
    LOG_IN_START, 
    LOG_IN_SUCCESS, 
    LOG_IN_ERROR,
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_ERROR
}   from '../actions'

const initialState = {
    friendsList : [],
    isLoading: false,
    error:'',
    fireRedirect: false,
    isLoggingIn : false,
    hasToken: false
}
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOG_IN_START:
            return{
                ...state,
                isLoggingIn:true
            }
        case LOG_IN_SUCCESS:
            return{
                ...state,
                isLoggingIn: false,
                hasToken: true,
                fireRedirect : true
            }
        case LOG_IN_ERROR:
            return{
                ...state,
                isLoggingIn: false,
                error: action.payload,
                hasToken: false,
                fireRedirect: false,
            }
        case GET_FRIENDS_START:
            return{
                ...state, 
                isLoading: true,
            }
        case GET_FRIENDS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                friendsList: action.payload
            }
        default:
            return state;
    }
}