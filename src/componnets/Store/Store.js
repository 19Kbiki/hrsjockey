import React from 'react'
import  styles from "../Store/Store.module.scss"
export default function Store() {
  return (
    <div>
     <section className={styles.banner_about}>
        <div className={styles.banner_info}>
          <h1>Our Store</h1>
          <h3><a href='/'>Home </a>| Store</h3>
        </div>
      </section>

     <section className={styles.contacts} >
      <div className={styles.contact_dtl}>
        <h4><i className='fa-solid fa-phone-volume'></i> +91 87893 10045</h4>
        <h4><i className='fa-solid fa-envelope'></i> info@hrstitan.com</h4>
        <h4><i className='fa-solid fa-location'></i>  Near Pantaloon Showroom , Judges colony Gaya , Bihar , 823001</h4>
        
      </div>
     </section>

      <section className={styles.store_show}>
        <div className={styles.wrap}>
          <img src='assets/store/about.jpg'/> 
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.1872893780796!2d84.98887717612794!3d24.78903954811026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bd5e87a0363%3A0x25c6202f1fd73efe!2sPantaloons%20(Sipahi%20Lane%2C%20Gaya)!5e0!3m2!1sen!2sin!4v1692332402262!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      <section  className={styles.contact_info}>
        
          <h1>View Store</h1>
        <div className={styles.wrap}>
          {storeImg.map(ele=> <div className={styles.card}><img src={ele.img} /></div>)}
        </div>
      </section>
    </div>
  )
}

export const storeImg = [
  {img:"assets/store/5.jpg"},
  {img:"assets/store/6.jpg"},
  {img:"assets/store/7.jpg"},
  {img:"assets/store/2.jpg"},
  {img:"assets/store/1.jpg"},
  {img:"assets/store/8.jpg"},
  {img:"assets/store/3.jpg"},
  {img:"assets/store/4.jpg"},
 
]