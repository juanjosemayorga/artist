import React from 'react'
import PropTypes from 'prop-types'

import PlayMusicIcon from '@Assets/icons/PlayMusicIcon'
import SoundBarsIcon from '@Assets/icons/SoundBarsIcon'
import SpeakerIcon from '@Assets/icons/SpeakerIcon'

import './SongPlaying.css'

const SongPlaying = ({ visibility }) => (
  <div className={`song-playing__container--${visibility ? 'show' : 'hide'}`}>
    <SoundBarsIcon className="song-playing__right" />
    <PlayMusicIcon className="song-playing__right" />
    <p>D Fine Us / Howling at the Moon</p>
    <SpeakerIcon />
  </div>
)

SongPlaying.propTypes = {
  visibility: PropTypes.bool.isRequired
}

export default SongPlaying
