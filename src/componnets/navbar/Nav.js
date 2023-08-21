import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from "../navbar/Nav.module.scss"
import {menu} from "../../configer/config"
export default class Nav extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    
    return (
      <div>
        <header>
            <nav>
                <div className={styles.topnav}>
                    <div className='container'>
                        <div className={styles.box}>
                            <p>Free shipping, 30-day return or refund guarantee.</p>
                            <div className={styles.contact_info}>
                                <ul>
                                    <li>+91 6294467292</li>
                                    <li>info@hrstitan.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.main_nav}>
                    <div className='container'>
                        <div className={styles.box}>
                            <div className={styles.logo}>
                                <img  src='assets/logo.png' alt='logo'/>
                            </div>
                            <div className={styles.menu}> 
                                <ul>
                                    {menu.map(ele=> <li><a href={ele.url}> {ele.name} </a></li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
      </div>
    )
  }
}
