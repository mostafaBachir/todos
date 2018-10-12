import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import LoginForm from '../components/Login'
import {login} from  '../store/actions/authActions'
import {errors, isAuthenticated} from '../store/reducers/authReducer'
const Login = (props) => {
  console.log(props)
  if(props.isAuthenticated) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <div className="login-page">
        <LoginForm {...props}/>
      </div>
    )
}}
const mapStateToProps = (state) => ({
  errors: errors(state.gestion_auth),
  isAuthenticated: isAuthenticated(state.gestion_auth)
})
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (username, password) => {
    dispatch(login(username, password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
