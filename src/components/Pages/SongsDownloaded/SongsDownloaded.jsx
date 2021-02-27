import React from 'react'
import './SongsDownloaded.css'

const SongsDownloaded = () => (
  <div className="songs-downloaded-container">
    <h3 className="songs-downloaded__title">
      You downloaded
      <br />
      <span className="songs-downloaded__title--number">119 </span>
      songs this year
    </h3>
    <p className="songs-downloaded__text">2020 was a challenging year but you kept creating. Here are some of your favorite songs this year</p>
  </div>
)

export default SongsDownloaded
