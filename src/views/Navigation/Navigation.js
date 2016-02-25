import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Navigation.scss'
import Link from '../Link'

class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={cx(this.props.className)}>
        <div className={cx(s.navBars)}>
          test
        </div>
        <div id="nav-links" className={cx(s.root, s.navLinks, 'fa', 'fa-bars')} role="navigation">
          <Link className={s.link} to="/about">About</Link>
          <Link className={s.link} to="/contact">Contact</Link>
          <span className={s.spacer}> | </span>
          <Link className={s.link} to="/login">Log in</Link>
          <span className={s.spacer}>or</span>
          <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
        </div>
      </div>
    )
  }

}

export default withStyles(Navigation, s)
