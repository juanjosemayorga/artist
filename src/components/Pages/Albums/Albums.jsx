import React from 'react'
import IMAGES_ALBUMS from '@Data/albums.json'
import './Albums.css'

const Albums = () => (
  <div className="albums-component-container">
    {
      IMAGES_ALBUMS.map(album => (
        <figure className="albums-component__figure" key={album.id}>
          <img src={album.link} alt={album.name} />
        </figure>
      ))
    }
  </div>
)

export default Albums
