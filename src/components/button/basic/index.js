import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import styles from './styles'

class BasicButton extends Component {
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
    const buttonStyle = {
      margin: 5,
      borderRadius: 5,
      backgroundColor: 'rgb(136, 27, 27)',
      outline: 'none',
      outlineColor: 'none',
      width: 220,
      height: 50,
      color: 'white',
    }
    return (
      <div style={styles.root}>
        <button
          style={buttonStyle}
          onClick={this.props.onClickHandler}
        >
      {this.props.value}
    </button>
      </div>
    )
  }
}

BasicButton.propTypes = {
}

export default BasicButton
