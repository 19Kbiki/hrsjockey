import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from "react-slick";
import {kidsCollections} from "../../../configer/config"
import styles from "../Kid/Kids.module.scss"
export class Kids extends Component {
  static propTypes = {

  }

  render() {
    const settings = {
        dots: true,
        infinite: false,
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        centerPadding: "60px",
        autoplay: true,
        autoplaySpeed: 2000
      };
    return (
      <div>
        <section className={styles.kids}>
        <Slider {...settings}>
            {kidsCollections.map((ele) => {
                return (
                    <div className={styles.cards}>
                        <img src={ele.img} alt='items'/>
                        <div className={styles.card_body}>
                            <h4>{ele.name}</h4>
                            <p>Collection : {ele.collecion}</p>
                        </div>
                    </div>
                )
            })}
           
        </Slider>
        </section>
       
      </div>
    )
  }
}

export default Kids

