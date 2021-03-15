import React from 'react'
import MoreAlbums from '@Components/Pages/MoreAlbums/MoreAlbums'
import useWindowSize from '@Hooks/useWindowSize'
import './WhoSoundtrackedMost.css'

const WhoSoundtrackedMost = () => {

  const PROFILE_PICTURE = 'https://res.cloudinary.com/juanjosemayorga/image/upload/v1614440553/artist-project/ellipse_person_orvid1.png'
  const { width } = useWindowSize();

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
      <h3 className="who-soundtracked__title">
        Rex Banner
        {width < 768 ? <br /> : ' '}
        soundtracked
        <br />
        most of your videos
      </h3>
      <p className="who-soundtracked__subtitle">
        You downloaded
        <span> 10 </span>
        of their songs. Jump back into Rex Banner&#039;s music
      </p>
      <div className="who-soundtracked__more-albums-component--container">
        {width >= 768 && <MoreAlbums />}
      </div>
    </div>
  )
}

export default WhoSoundtrackedMost
