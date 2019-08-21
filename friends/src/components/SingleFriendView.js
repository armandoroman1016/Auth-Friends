import React from 'react'
import { connect } from 'react-redux'

const SingleFriendView = props => {

    console.log(props)
    
    return (
        <div>
        {props.friendsList.map(friend => friend.id.toString() === props.match.params.id ? 
            <div key = {friend.id}>
                <h1>{friend.name}</h1>
                <h2>{friend.email}</h2>
                <h3>{friend.age}</h3>
            </div>
            : false)
        }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        friendsList : state.friendsList
    }
}

export default connect(mapStateToProps, {})(SingleFriendView)
