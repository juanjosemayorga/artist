import React from 'react';
import PropTypes from 'prop-types'

import PLAY_ROUNDED_ICON from '@Assets/icons/play-round.png'
import PAUSE_ROUNDED_ICON from '@Assets/icons/pause-round.png'

const HoverAlbum = ({ title }) => (
  <div className="hover-album-container">
    <p className="hover-album__text">{title}</p>
    <img
      className="hover-album__play-icon"
      src={PLAY_ROUNDED_ICON}
      alt=""
    />
  </div>
)

HoverAlbum.propTypes = {
  title: PropTypes.string.isRequired
}

export default HoverAlbum
