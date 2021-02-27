import React from 'react'
import './Albums.css'
import IMAGES_ALBUMS from '../../../data/albums.json'

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
