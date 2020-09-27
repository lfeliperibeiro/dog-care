import React from 'react'
import {Container, LogoArea, Social, Links, LinkArea, Contact, ContactArea} from './styles'

import Logo from '../../assets/img/logo.png'
import SocialIcon from '../../assets/img/social.png'
import Address from '../../assets/img/place_24px.png'
import Phone from '../../assets/img/smartphone_24px.png'
import Mail from '../../assets/img/email_24px.png'
import Clock from '../../assets/img/timer_24px.png'


const FooterLabel: React.FC = () => {
  return (
    <Container>
      <LogoArea>
        <img src={Logo} alt=""/>
        <p>This is a blurb about the company sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua. </p>
        <Social>
          <img src={SocialIcon} alt=""/>        
        </Social>
      </LogoArea>
      <Links>
      <a href="/">EXPLORE LINKS</a>
      <LinkArea>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Specials</a>
        <a href="/">Estimates</a>
        <a href="/">Reviews</a>
        <a href="/">Shop</a>
        <a href="/">Careers</a>
        <a href="/">FAQs</a>
      </LinkArea>
      
      </Links>
      <Contact>
        <h1>Contact</h1>
        <ContactArea>
          <img src={Address} alt=""/>
          <p>321 Pikes Place Parkway
            Seattle, WA 54321</p>
        </ContactArea>
        <ContactArea>
          <img src={Phone} alt=""/>
          <p>(555) 765-4321</p>
        </ContactArea>
        <ContactArea>
          <img src={Mail} alt=""/>
          <p>Info@company.com</p>
        </ContactArea>
        <ContactArea>
          <img src={Clock} alt=""/>
          <p>Mon - Sat:  7:000 am - 6:00 pm</p>
        </ContactArea>
      </Contact>

    </Container>
  )
}

export default FooterLabel