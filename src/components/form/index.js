import React, { Component } from 'react'
import Input from './input'

import styles from './styles'

class Form extends Component {
  render() {
    return (
      <div style={styles.root}>
        <h1> Input Fields </h1>
        <Input /> Basic
        <Input customStyle="error" /> Error
        <Input customStyle="strongGlow" /> strongGlow
        <Input customStyle="flatLiner" /> Flat
        <Input customStyle="focusGlow" /> Basic
      </div>
    )
  }
}

export default Form
