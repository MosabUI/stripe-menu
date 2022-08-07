import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  
  return ( 
  <section className='hero' onMouseOver={closeSubmenu}>
    <div className='hero-center'>
     <article className='hero-info'>
      <h1>Payments infrastructure for the internet</h1>
      <p>Millions of copmany of all size-from startups to fortune 500s use Stripe's software and API's to accept payment, send payouts, and manage their business online </p>
      <button className='btn'>
        Start now 
      </button>
     </article>
     <article className='hero-images'>
      <img src={phoneImg} className="phone-img" />
     </article>
     </div>
    </section>
    
  )
}

export default Hero
