import React from 'react'

import PlayMusicIcon from '@Assets/icons/PlayMusicIcon'
import SoundBarsIcon from '@Assets/icons/SoundBarsIcon'
import SpeakerIcon from '@Assets/icons/SpeakerIcon'

import './SongPlaying.css'

const SongPlaying = () => (
  <div className="song-playing__container">
    <SoundBarsIcon className="song-playing__right" />
    <PlayMusicIcon className="song-playing__right" />
    <p>D Fine Us / Howling at the Moon</p>
    <SpeakerIcon />
  </div>
)

export default SongPlaying
