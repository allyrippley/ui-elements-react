import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Header.scss'
import Link from '../Link'
import Navigation from '../Navigation'

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation className={s.nav} />
          <Link className={s.brand} to="/">
            <img src={require('./logo.png')} width="38" height="38" alt="VII Designs" />
            <span className={s.brandTxt}>Designs</span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Boilerplate</h1>
            <p className={s.bannerDesc}>React Components built for speed</p>
          </div>
        </div>
      </div>
    )
  }

}

export default withStyles(Header, s)
