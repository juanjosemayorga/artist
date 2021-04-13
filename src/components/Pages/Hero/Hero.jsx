import React from 'react'
import SongPlaying from '@Components/SongPlaying/SongPlaying'
import useWindowSize from '@Hooks/useWindowSize'
import useAudio from '@Hooks/useAudio'
import { connect } from 'react-redux'
import './Hero.css'

const Hero = ({ playingSong }) => {

  const { width } = useWindowSize()
  const [toggle] = useAudio()

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
            {playingSong ? 'PAUSE' : 'PLAY'}
          </button>
        </section>
        <SongPlaying
          visibility={width > 768}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  song: state.activeSong.song,
  playingSong: state.playingSong
})

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Hero)
