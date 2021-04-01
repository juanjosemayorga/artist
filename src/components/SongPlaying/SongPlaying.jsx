import React from 'react'
import PropTypes from 'prop-types'

import PlayMusicIcon from '@Assets/icons/PlayMusicIcon'
import SoundBarsIcon from '@Assets/icons/SoundBarsIcon'
import SpeakerIcon from '@Assets/icons/SpeakerIcon'

import { connect } from 'react-redux'

import './SongPlaying.css'

const SongPlaying = ({ visibility, name, artist }) => (
  <div className={`song-playing__container--${visibility ? 'show' : 'hide'}`}>
    <SoundBarsIcon className="song-playing__right" />
    <PlayMusicIcon className="song-playing__right" />
    <p>{`${name} / ${artist}`}</p>
    <SpeakerIcon />
  </div>
)

SongPlaying.propTypes = {
  visibility: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  name: state.activeSong.name,
  artist: state.activeSong.artist
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SongPlaying)
