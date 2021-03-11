import React from 'react'
import IMAGES_ALBUMS from '@Data/albums.json'

import PLAY_ROUNDED_ICON from '@Assets/icons/play-round.png'
import PAUSE_ROUNDED_ICON from '@Assets/icons/pause-round.png'

import './Albums.css'

const Albums = () => (
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
              <img
                src={PLAY_ROUNDED_ICON}
                alt={album.name}
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

export default Albums
