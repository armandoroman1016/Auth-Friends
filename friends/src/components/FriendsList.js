import React, { useEffect } from 'react'
import { getFriends } from '../actions'
import { connect } from 'react-redux'
import FormikAddFriend from './AddFriendForm'


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
                    <div>
                        <h2>{friend.name}</h2>
                        <h3>{friend.age}</h3>
                        <h3>{friend.email}</h3>
                    </div>
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