import React from 'react'
import SongPlaying from '@Components/SongPlaying/SongPlaying'
import './Grew.css'

const Grew = () => (
  <div className="grew-container">
    <p className="grew__first-text">You grew as a creator, we grew together with you</p>
    <h3 className="grew__title">
      <span>7,584 </span>
      new songs and
      <span> 12,463 </span>
      SFX were added to the catalog to bring your vision to life
    </h3>
    <h2 className="grew__year">2021</h2>
    <p className="grew__collections-text">Check out the best of 2020 collections</p>
    <button
      className="grew__browse-collections-button"
      type="button"
    >
      Browse Collections
    </button>
    <SongPlaying />
  </div>
)

export default Grew
