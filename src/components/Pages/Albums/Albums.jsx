import React, { useEffect, useState } from 'react'
import IMAGES_ALBUMS from '@Data/albums.json'

import PLAY_ROUNDED_ICON from '@Assets/icons/play-round.png'
import PAUSE_ROUNDED_ICON from '@Assets/icons/pause-round.png'

import { connect } from 'react-redux'
import { setSong } from '@Redux/actionCreators'

import useAudio from '@Hooks/useAudio'

import './Albums.css'


const Albums = ({ handlePlaySong, playingSong }) => {

  const [toggle, playSong, pauseSong] = useAudio()

  const [state, setState] = useState({
    checked: null
  })

  const handlePlay = (album) => {

    const choosed = album.id

    if(state.checked === choosed) {
      setState({
        checked: null
      })
      toggle()
      return;
    }

    if(!playingSong) {
      handlePlaySong(album)

      setTimeout(() => {
        playSong()
      });

      setTimeout(() => {
        setState({
          checked: choosed
        })
      });

    } else {

      handlePlaySong(album)
      pauseSong()
      setState({
        checked: choosed
      })
      setTimeout(() => {
        toggle()
      });

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
                  src={state.checked === album.id ? PAUSE_ROUNDED_ICON : PLAY_ROUNDED_ICON}
                  name={album.id}
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
  song: state.activeSong.song,
  playingSong: state.playingSong
})

const mapDispatchToProps = dispatch => ({
  handlePlaySong: (song) => dispatch(setSong(song)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
