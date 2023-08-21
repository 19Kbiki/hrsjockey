import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from "../Home/Home.module.scss"
import {blogNews, catagoris_menu} from "../../configer/config"
import { Outlet } from 'react-router-dom'
export default class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <section className={styles.banner}>
          <div className='container'>
            <div className={styles.wrap_}>
              <div className={styles.banner_info}>
                <h6>Summer Collection</h6>
                <h1>Elevate Your Style <br/> with our Chic <br/><span> Summer Collection!</span> </h1>
                <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
                <a href='/store'>Visit Store <i class="fa-solid fa-arrow-right"></i></a>
              </div>
              <div className={styles.img}>
                <img src='assets/banner.webp' alt='banner'/>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.banners_ad}>
          <div className='container'> 
          <div className={styles.wrap} >
            <div>
            <img src='assets/add_banner.webp' />      

            </div>
            <div>

            <img src='assets/add_banner2.webp' />         
            </div>
          </div>
          </div>
        </section>

        <section className={styles.best_sales}>
          <div className='container'>
            <div className={styles.catagoris_menu}>
              <h1>Best Sales</h1>
              <ul>
                {catagoris_menu.map(ele=><li><a href={ele.url}>{ele.name}</a></li>)} 
              </ul>
            </div>
              <Outlet/>
          </div>
        </section>

        {/* <section className={styles.game}>
          <div className='container'>
            <a href='https://www.newsfeedsmartapp.com/Jockey/JockeyWoman/?source=Microsite&jockey_tracking=BraGame' target='blank'>
              <img src='assets/game.webp' />
            </a>
          </div>
        </section> */}


        <section className={styles.shop}>
            <div className='container'>
              <h1>Shop</h1>
              <h2>MULTIPACKES</h2>
              <div className={styles.wrap}>
                <div>
                 <img src='assets/hero1.webp' /> 
                </div>
                <div>
                <img src='assets/hero2.webp' />
                </div>
                <div>
                  
                <img src='assets/hero3.webp' />
                </div>
              </div>
            </div>
        </section>


        <section className={styles.blog}>
          <div className='container'>
            <h5>LATEST NEWS</h5>
            <h1>Fashion New Trends</h1>
            <div className={styles.wrap}>
              
            {blogNews.map((ele)=>{
              return (
                <div className={styles.card}>
                  <img src={ele.img} alt='' />
                  <div className={styles.card_body}>
                    <h6>{ele.date}</h6>
                    <h4>{ele.name}</h4>
                    <p>{ele.info}</p>
                  </div>
                </div>
              )
            })}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

