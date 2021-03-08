import React from 'react'
import SongPlaying from '@Components/SongPlaying/SongPlaying'
import useWindowSize from '@Hooks/useWindowSize'
import './Hero.css'

const Hero = () => {

  const { width } = useWindowSize()
  console.log(`Este es el ancho: ${width}px`);

  return (
    <div className="hero__container">
      <h1 className="hero__title">20</h1>
      <div className="hero__section-container">
        <section>
          <h3 className="hero__section-container--year">2020</h3>
          <h2 className="hero__section-container--text">Your year as an Artlist Creator</h2>
          <button className="hero__section-container--button" type="button">PLAY</button>
        </section>
        <SongPlaying
          visibility={false}
        />
      </div>
    </div>
  )
}

export default Hero
