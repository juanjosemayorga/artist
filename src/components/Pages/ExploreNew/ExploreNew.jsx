import React from 'react'
import Slider from 'react-slick';
import './ExploreNew.css'
import ALBUMS from '../../../data/albums-carousel.json'


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const PICTURE = 'https://res.cloudinary.com/juanjosemayorga/image/upload/v1614740411/artist-project/Kevin_Graham-Ablaze-A1_qev4ga.png'

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
