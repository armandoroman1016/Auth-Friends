import React from 'react'
import { Form, Field, withFormik } from 'formik'
import { logInAttempt } from '../actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as Yup from 'yup'

const LoginForm = props => {
    
    return (
        <div className = 'login-form'>
        <Form>
            <h2>Log In</h2>
            
            <Field type = 'text' name = 'username' />

            <Field type = 'password' name = 'password'/>

            <button type = 'submit'>Login</button>

        </Form>
        { props.fireRedirect && props.hasToken && !props.isLoggingIn ?
            <Redirect to ='/friends'/>
            : false }
        </div>
    )
}

const LoginFormik = withFormik({
    mapPropsToValues({ username, password }){
        return{
            username : username || '',
            password : password || ''
        }
    },
    validationSchema : Yup.object().shape({
        username: Yup.string().required('Username is required.'),
        password: Yup.string().required('Password is required.')
    }),
    handleSubmit(values, props){
        
        const dataToPost = {
            username: values.username,
            password: values.password
        }
    props.props.logInAttempt(dataToPost)
    }
})(LoginForm)


const mapStateToProps = state => {
    
    return {
        isLoggingIn : state.isLoggingIn,
        hasToken : state.hasToken,
        fireRedirect : state.fireRedirect
    }
}

export default connect(mapStateToProps, { logInAttempt })(LoginFormik)