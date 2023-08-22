import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from "../navbar/Nav.module.scss"
import {menu} from "../../configer/config"
export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showMenu: false,
          colorChange: false,
        };
        this.myFunction = this.myFunction.bind(this);
      }
    
      componentDidMount() {
        window.addEventListener("scroll", this.changeNavbarColor);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.changeNavbarColor);
      }
    
      myFunction() {
        console.log("button click");
        this.setState((prevState) => ({
          showMenu: !prevState.showMenu,
        }));
        document.body.classList.toggle('no-scroll');
      }
      changeNavbarColor = () => {
        if (window.scrollY >= 80) {
          this.setState({
            colorChange: true,
          });
        } else {
          this.setState({
            colorChange: false,
          });
        }
      };
  render() {
    
    return (
      <div>
        <header  className={`${styles.navbar} ${    this.state.colorChange ? styles.colorChange : ""  }`}>
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

        <header  className={`${styles.mobile_nav} ${    this.state.colorChange ? styles.colorChange : ""  }`}>
          <nav>
              <div className="container">
                  <div className={styles.nav_bar}>
                    <div className={styles.logo}>
                      <a href="/">
                      <img  src='assets/logo.png' alt=''></img>
                      </a>
                    </div>
                  
                    <div className={styles.toggle_button}>
                      <button
                        onClick={this.myFunction}
                        className={this.state.showMenu ? styles.menuicons : ""}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
              </div>
          </nav>
        </header>

        {/* {this.state.showMenu && ( */}
        <div className={`${styles.toggle_menu}  ${this.state.showMenu ? styles.actives : "" }`} >
          <div className={styles.menus}>
            <ul className={styles.navbar_nav}>
                {menu.map(ele=> <li><a className={this.state.showMenu ? styles.menuicons : "nav_a"}  onClick={this.myFunction}  href={ele.url}>{ele.name}</a></li>)}
            </ul>
          
          </div>
         {/* <Footer/> */}
        </div>
      </div>
    )
  }
}
