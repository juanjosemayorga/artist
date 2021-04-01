import React from 'react'
import SongPlaying from '@Components/SongPlaying/SongPlaying'
import useWindowSize from '@Hooks/useWindowSize'
import useAudio from '@Hooks/useAudio'
import './Hero.css'

const Hero = () => {

  const SONG = 'https://juan-jose-mayorga-projects.s3.amazonaws.com/react/artist/audios/Alan_Walker_Fade_NCS_Release.mp3'

  const { width } = useWindowSize()
  const [playing, toggle] =useAudio(SONG)

  return (
    <div className="hero__container">
      <h1 className="hero__title">20</h1>
      <div className="hero__section-container">
        <section>
          <h3 className="hero__section-container--year">2020</h3>
          <h2 className="hero__section-container--text">Your year as an Artlist Creator</h2>
          <button
            onClick={toggle}
            className="hero__section-container--button"
            type="button"
          >
            {playing ? 'PAUSE' : 'PLAY'}
          </button>
        </section>
        <SongPlaying
          visibility={width > 768}
        />
      </div>
    </div>
  )
}

export default Hero
