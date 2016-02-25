import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Feedback.scss'

class Feedback extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <a
            className={s.link}
            href="http://github.com/allyrippley"
          >Follow me on GitHub</a>
          <span className={s.spacer}>|</span>
          <a
            className={s.link}
            href="https://github.com/allyrippley/react-base-webpack/issues/new"
          >Report an issue</a>
        </div>
      </div>
    )
  }

}

export default withStyles(Feedback, s)
