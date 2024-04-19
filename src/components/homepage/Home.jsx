import React from 'react'
import { Navbar } from '../navbar1/navbar.component'
import { Header } from '../header2/header.component'
import { MainNav } from '../mainnav3/mainnav.component'
import { Banner } from '../banner4/banner.component'
import { Products } from '../products5/products.component'
import { Productssecond } from '../productssecond6/productssecond.component'
import { Cards } from '../cardsgroup7/cardsgroup.component'
import { Categories } from '../categories8/categories.component'
import { Productsthird } from '../productsthird10/productsthird.component'
import { Logosgroup } from '../logosgroup11/logos.component'
import { Bannersecond } from '../bannersecond12/bannersecond.component'
import { Final } from '../final13/final.component'
import { Footer } from '../footer14/footer.component'
import { Promo } from '../promo9/promo.component'
import { Top } from '../header1/top.component'
import Carousell from '../carousel/carousel.component'
import './Home.css';
import { Contact } from '../contact/contact.component'
import Slide, { Slider } from '../slider/slider.component'
import { Faq } from '../faq/faq'
import { SlickSlider } from '../reactslick/reactslick'
import { Wishlist } from '../wishlist/wishlist'
import { DashBoard } from '../dashboard/dashboard'

export const Home = () => {
  return (
    <div className='home'>
      <Banner></Banner>
      <Products></Products>
      <Productssecond></Productssecond>
      <Categories></Categories>
      <Promo></Promo>
      <Productsthird></Productsthird>
      <Cards></Cards>
      <Logosgroup></Logosgroup>
      <Bannersecond></Bannersecond>
      <Final></Final>
    </div>
  )
}