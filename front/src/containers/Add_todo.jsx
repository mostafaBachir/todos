import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import LoginForm from '../components/Login'
import TextInput from '../components/TextInput'
import {add_to_do} from  '../store/actions/authActions'
import  {Button} from 'react-bootstrap'

class AddTodo extends Component {
  handleInputChange = (event) => {
    console.log(event.target.value)
    const target = event.target,
          value = target.type ===
            'checkbox' ? target.checked : target.value,
          name = target.name
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.username)
  }
  render() {
    if( ! this.props.isAuthenticated) {
      return (
        <Redirect to='/login' />
      )
    } else {
      return (
        <div>
        <TextInput name="titre" label="Titre"
                   onChange={this.handleInputChange} />
         <TextInput name="description" label="Description"
                              onChange={this.handleInputChange} />
                            <Button value="Ajouter" onClick={this.onSubmit}/>
   </div>
    )
  }
  }

}

const mapStateToProps = (state) => ({
  isAuthenticated: state.gestion_auth.is_auth
})
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (todo_task) => {
    dispatch(add_to_do(todo_task))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
