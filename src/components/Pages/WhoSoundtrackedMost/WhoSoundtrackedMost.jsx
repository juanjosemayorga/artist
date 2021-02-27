import React from 'react'
import './WhoSoundtrackedMost.css'

const WhoSoundtrackedMost = () => {

  const PROFILE_PICTURE = 'https://res.cloudinary.com/juanjosemayorga/image/upload/v1614440553/artist-project/ellipse_person_orvid1.png'

  return (
    <div className="who-soundtracked-container">
      <div className="who-soundtracked__profile-image-container">
        <div className="who-soundtracked__profile-image--background" />
        <figure className="who-soundtracked__profile-image--figure">
          <img
            className="who-soundtracked__profile-image--image"
            src={PROFILE_PICTURE}
            alt="Profile"
          />
        </figure>
      </div>
      <h3>Rex Banner soundtracked most of your videos</h3>
      <p>You downloaded 10 of their songs</p>
      <p>Jump back into Rex Banner's music</p>
    </div>
  )
}

export default WhoSoundtrackedMost
