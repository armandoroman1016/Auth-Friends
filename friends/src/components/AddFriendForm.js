import React from 'react'
import { Form, Field, withFormik } from 'formik'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import { addFriend } from '../actions'

const AddFriendForm = props => {

    return(
        <Form style = {{marginBottom : '30px'}}>
            <h2>Add A Friend</h2>
            <Field type = 'text' name = 'name' placeholder = 'Name'/>
            <Field type = 'text' name = 'age' placeholder = 'Age'/>
            <Field type = 'text' name = 'email' placeholder = 'Email'/>
            <button type = 'submit'>Add Friend</button>
        </Form>
    )
}

const FormikAddFriend = withFormik({

    mapPropsToValues({ name, age, email}){
        return{
            name: name || '',
            age: age || '',
            email: email || ''
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Friend's name is required"),
        age: Yup.number().required('Age is required'),
        // email: Yup.required('Email is required')
    }),
    handleSubmit(values, props){

        const dataToPost = {
            id: Date.now(),
            name: values.name,
            age: values.age,
            email: values.email 
        }

        props.props.addFriend(dataToPost)

        values.name = ''
        values.age = ''
        values.email = ''
    }    
})(AddFriendForm)

const mapStateToProps = state => {
    return{
        state
    }
}

export default connect(mapStateToProps, { addFriend })(FormikAddFriend)