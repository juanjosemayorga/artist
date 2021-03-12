import React, { useState } from 'react'
import IMAGES_ALBUMS from '@Data/albums.json'

import PLAY_ROUNDED_ICON from '@Assets/icons/play-round.png'
import PAUSE_ROUNDED_ICON from '@Assets/icons/pause-round.png'

import './Albums.css'

const Albums = () => {

  const initialPlaying = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  }

  const [playing, setPlaying] = useState(initialPlaying)

  const handlePlay = (e) => {

    const choosed = e.target.name

    if (playing[choosed]) {
      setPlaying(initialPlaying)
    } else {
      setPlaying({
        ...initialPlaying,
        [e.target.name]: true
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
                  src={playing[album.id] ? PAUSE_ROUNDED_ICON : PLAY_ROUNDED_ICON}
                  name={album.id}
                  onKeyDown={handlePlay}
                  onClick={handlePlay}
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

export default Albums
