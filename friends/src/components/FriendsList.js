import React, { useEffect } from 'react'
import { getFriends } from '../actions'
import { connect } from 'react-redux'


const FriendsList = props => {

    useEffect(() => {

        props.getFriends();
        
    },[])

    return (
        <div>
            Hello
        </div>
    )
}

const mapStateToProps = state => {
    return {
        friendsList : state.friendsList
    }
}

export default connect(mapStateToProps, {getFriends})(FriendsList)