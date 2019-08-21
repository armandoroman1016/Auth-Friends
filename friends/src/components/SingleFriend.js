import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SingleFriendView from './SingleFriendView'

const Friend = props => {

    const { friend } = props
    return (

        <div className='single-friend'>
                <Link to={`/friend/${friend.id}`} >
                    <h1>Name : {friend.name}</h1>
                    <h1>Age : {friend.age}</h1>
                    <h1>Email : {friend.email}</h1>
                </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        friendsList: state.friendsList
    }
}

export default connect(mapStateToProps, {})(Friend)