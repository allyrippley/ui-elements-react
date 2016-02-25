import React, { Component } from 'react'
import Input from '../../components/form/input'
import BasicButton from '../../components/button/basic'

class Login extends Component {

  render() {
    return (
      <div style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center'}}>
      <Input name="username" placeholder="username" />
      <Input name="password" placeholder="password" />
      <BasicButton color="blue" value="test" />
      </div>
   )
  }
}

export default Login
