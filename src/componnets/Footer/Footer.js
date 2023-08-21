import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from "../Footer/Footer.module.scss"

export class Footer extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <footer>
            <div className='container'>
                <div className={styles.wrap}>
                    <div className={styles.card}>
                        <a href='/'>
                            <img src='assets/logo.png' alt=''/>
                        </a>
                        <p>The customer is at the heart of our unique 
                        business model, which includes 
                        design.</p>
                    </div>
                    <div className={styles.card}>
                        <h4>Shooping </h4>
                        <ul>
                            <li><a href=''>Clothing Store</a></li>
                            <li><a href=''>Trending Shoes</a></li>
                            <li><a href=''>Accessories</a></li>
                            <li><a href=''>Sale</a></li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h4>Quick Menu </h4>
                            <ul>
                                <li><a href=''>Home</a></li>
                                <li><a href=''>About us</a></li>
                                <li><a href=''>Store</a></li>
                            </ul>
                    </div>
                    <div className={styles.card}>
                        <h4>Contact us </h4>
                        <ul>
                            <li><a href=''>6294467292</a></li>
                            <li><a href=''>info@gmail.com</a></li>
                            <li><a href=''>Mathurapur, Malda 732203</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer_bottom}>
                    <p>@2023 copyright HRS Jockey | Designed By <a>Datavedam</a></p>
                </div>
            </div>
        </footer>
      </div>
    )
  }
}

export default Footer
