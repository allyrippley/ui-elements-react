import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import radium from 'radium'
import styles from './styles'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillUpdate(nextProps, nextState) {
    window.console.log(nextState.value)
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  render() {
    const tooltip = this.props.tooltip ?
      <div style={styles.tooltip}>{this.props.tooltip}</div> : null

    const inputLabel = this.props.label ?
      <label htmlFor={this.props.name}> {this.props.label} </label> : null
    let stylesCustom = ''
    if(this.props.customStyle){
      stylesCustom = styles[this.props.customStyle]
    } else {

    }
    return (
      <div style={styles.root}>
        <input
          style={[styles.input, stylesCustom]}
          type="text"
          name={this.props.name}
          id={this.props.name}
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
        />
        {inputLabel}
        {tooltip}
      </div>
    )
  }
}

Input.propTypes = {
  name: React.PropTypes.string.isRequired,
  tooltip: React.PropTypes.string,
  label: React.PropTypes.string,
  placeholder: React.PropTypes.string,
}

export default radium(Input)
