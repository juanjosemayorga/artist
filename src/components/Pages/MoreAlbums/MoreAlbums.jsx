import React from 'react'
import IMAGES_ALBUMS from '@Data/more-albums.json'
import './MoreAlbums.css'

const MoreAlbums = () => (
  <div className="more-albums-component-container">
    {
      IMAGES_ALBUMS.map(album => (
        <figure className="more-albums-component__figure" key={album.id}>
          <img src={album.link} alt={album.name} />
        </figure>
      ))
    }
  </div>
)

export default MoreAlbums
