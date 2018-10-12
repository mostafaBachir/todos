import React, {Component} from 'react'
import { ControlLabel, Jumbotron, Button, Form} from 'react-bootstrap'
import TextInput from './TextInput'
export default class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }
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
    this.props.onSubmit(this.state.username, this.state.password)
  }
  render() {
    const errors = this.props.errors || {}
    return (
      <Jumbotron className="container">
        <Form onSubmit={this.onSubmit}>
          <h1>Connexion</h1>
          {
           errors.non_field_errors?
             <ControlLabel color="danger">
                {errors.non_field_errors}
             </ControlLabel>:""
          }
          <TextInput name="username" label="Username"
                     error={errors.username}
                     onChange={this.handleInputChange} />
          <TextInput name="password" label="Password"
                     error={errors.password} type="password"
                     onChange={this.handleInputChange}/>
          <Button type="submit" color="primary" size="lg">
             Se connecter
          </Button>
        </Form>
      </Jumbotron>
    )
  }}
