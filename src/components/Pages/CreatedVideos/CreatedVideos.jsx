import React from 'react'
import './CreatedVideos.css'
import ALBUMS from '../../../data/created-video.json'

const CreatedVideos = () => (
  <section className="created-videos-container">
    <h3 className="created-videos__title">You created a lot of Uplifting videos this year</h3>
    <p className="created-videos__subtitle">
      You downloaded
      <span> 118 </span>
      Uplifting songs
    </p>
    <div className="created-videos__random-albums-container">
      <h3 className="created-videos__random-albums-container--text">UPLIFTING</h3>
      {
        ALBUMS.map(album => (
          <figure key={album.id}>
            <img
              src={album.link}
              alt={album.name}
            />
          </figure>
        ))
      }
    </div>
  </section>
)

export default CreatedVideos
