import React, { useEffect } from 'react'
import { getFriends } from '../actions'
import { connect } from 'react-redux'
import FormikAddFriend from './AddFriendForm'
import Friend from './SingleFriend'


const FriendsList = props => {

    useEffect(() => {

        props.getFriends();
        
    },[])

    return (
        <div>
            <h1>My Friends</h1>
            <FormikAddFriend/>
            {props.friendsList.map( friend => {
                return(
                    <Friend friend = {friend} key={friend.id}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        friendsList : state.friendsList
    }
}

export default connect(mapStateToProps, {getFriends})(FriendsList)