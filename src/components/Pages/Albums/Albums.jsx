import React, { useState } from 'react'
import IMAGES_ALBUMS from '@Data/albums.json'

import PLAY_ROUNDED_ICON from '@Assets/icons/play-round.png'
import PAUSE_ROUNDED_ICON from '@Assets/icons/pause-round.png'

import { connect } from 'react-redux'
import { playSong } from '@Redux/actionCreators'

import useAudio from '@Hooks/useAudio'

import './Albums.css'

const Albums = ({ handlePlaySong }) => {

  const initialPlaying = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  }

  const [playingSong, setPlayingSong] = useState(initialPlaying)

  const handlePlay = (album) => {

    handlePlaySong(album)

    const choosed = album.id

    if (playingSong[choosed]) {
      setPlayingSong(initialPlaying)
    } else {
      setPlayingSong({
        ...initialPlaying,
        [album.id]: true
      })
    }

  }

  return (
    <div className="albums-component-container">
      {
        IMAGES_ALBUMS.map((album, i) => (
          <div
            key={album.id}
            className={`albums-component__album-container albums-component__album-container--${i}`}
          >
            <div className="albums-component__internal-album">
              <div className='albums-component__internal-album--hover'>
                <p className={`albums-component__hover--title--${i}`}>{album.name}</p>
                <input
                  type="image"
                  alt={album.name}
                  src={playingSong[album.id] ? PAUSE_ROUNDED_ICON : PLAY_ROUNDED_ICON}
                  name={album.id}
                  onKeyDown={handlePlay}
                  onClick={() => handlePlay(album)}
                />
              </div>
              <figure className="albums-component__internal-album--figure">
                <img src={album.link} alt={album.name} />
              </figure>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  song: state.activeSong.song
})

const mapDispatchToProps = dispatch => ({
  handlePlaySong: (song) => dispatch(playSong(song))
})

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
