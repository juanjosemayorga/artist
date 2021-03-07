import React from 'react'
import SongPlaying from '@Components/SongPlaying/SongPlaying'
import './Hero.css'

const Hero = () => (
  <div className="hero__container">
    <h1 className="hero__title">20</h1>
    <section className="hero__section-container">
      <h3 className="hero__section-container--year">2020</h3>
      <h2 className="hero__section-container--text">Your year as an Artlist Creator</h2>
      <button className="hero__section-container--button" type="button">PLAY</button>
      <SongPlaying />
    </section>
  </div>
  )

export default Hero
