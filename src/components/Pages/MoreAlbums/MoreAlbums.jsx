import React from 'react'
import './MoreAlbums.css'
import IMAGES_ALBUMS from '../../../data/more-albums.json'

const MoreAlbums = () => (
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

export default MoreAlbums
