import React from 'react'
import Slider from 'react-slick';
import ALBUMS from '@Data/albums-carousel.json'
import './ExploreNew.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const ExploreNew = () => (
  <div className="explore-new-container">
    <h3 className="explore-new__title">Explore our new search filters</h3>
    <div className="explore-new__slider-container">
      <Slider {...settings}>
        {
          ALBUMS.map(album => (
            <figure
              key={album.id}
              className="explore-new__carousel-figure">
              <img
                className="explore-new__carousel-image"
                src={album.link}
                alt={album.name}
                title={album.name}
              />
            </figure>
          ))
        }
      </Slider>
    </div>
  </div>
)

export default ExploreNew
