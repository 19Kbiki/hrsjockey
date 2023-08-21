import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from "../About/About.module.scss"
export default class About extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
       <section className={styles.banner_about}>
        <div className={styles.banner_info}>
          <h1>About us</h1>
          <h3><a href='/'>Home </a>| About</h3>
        </div>
      </section>

      <section className={styles.info}>
        <div className='container'>
          <p>Page Industries Limited located in Bangalore, India is the exclusive licensee of JOCKEY International Inc. (USA) for manufacture, distribution and marketing of the JOCKEY® brand in India, Sri Lanka, Bangladesh, Nepal, UAE, Oman and Qatar. Page Industries is also the exclusive licensee of Speedo International Ltd. for the manufacture, marketing and distribution of the Speedo brand in India.</p>

          <p> The Company was set up in 1994 with the key objective of bringing the world renowned brand "JOCKEY®" to India. Its promoters are the Genomal family, who have been associated with JOCKEY International Inc. for 50 years as their sole licensee in the Philippines. Page Industries became a public company in March 2007 and is quoted in the Bombay Stock Exchange and the National Stock Exchange of India.</p>

          <p> The company commenced operations in the year 1995 with the manufacturing, distribution and marketing of Jockey® products. As of March 2018, the company’s workforce numbered over 20,000 people with manufacturing operations spread over fifteen state-of-the art manufacturing complexes in Bangalore, Hassan, Mysore, Gowribidanur, Tiptur and Tirupur. Page Industries commands wide spread pan India distribution encompassing over 50,000 plus retail outlets in 1,800 cities and towns and has revolutionized the innerwear market by launching Exclusive JOCKEY® Brand Outlets across India numbering 470 as of March 2018.</p>

          <p> In 2005 and 2009, the company was awarded the "best licensee of the year" by Jockey International Inc. as recognition for its outstanding achievement in establishing and strengthening the JOCKEY® brand as a market leader in India. 
            In 2010, the Company bagged the "International Licensee of the Decade" award for achieving record growth year after year, offering world class products and maintaining global quality standards across all operations.</p>

          <p> In 2012, the company was honoured for the “Outstanding Advancement of the Jockey Global Retail Image”, a rare distinction from amongst 142 countries where Jockey is present.</p>

          <p> Page Industries was honoured by Jockey International Inc. with the ‘International Licensee of the year’ award for 2013 as well, outperforming 140 other countries where the Jockey brand is present. This award was given in recognition of outstanding brand building, consistent healthy growth in sales, and remarkable product development and innovation in our markets. </p>

          <p> The Speedo brand is now into its sixth year of operation in India. Speedo products include swimwear, water shorts, apparel, equipment and footwear. The Speedo brand is now available in 1035 plus stores including large format stores in 189 cities and 31 Speedo exclusive brand outlets located in Delhi, Gurgaon, Noida, Mumbai, Pune, Bangalore, Chennai and Ahmedabad. 
            In 2013 Page Industries has been awarded the ‘Star SME (Small and Medium Enterprises) of the Year 2012’ by Business Standard, one of the most reputed business publications of our country. The award was presented to us by Hon. Shree Pranab Mukherjee, President of India.</p>

          <p> In 2018 Page Industries was presented with the Decadal Award in the CNBC TV18 – 10th Emerging India Awards for having truly raised the bar of excellence for over a decade.</p>
        </div>
      </section>
      </div>
    )
  }
}
