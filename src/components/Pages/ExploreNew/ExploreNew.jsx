import React from 'react'
import Slider from 'react-slick';
import './ExploreNew.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  // centerMode: true,
};

const PICTURE = 'https://res.cloudinary.com/juanjosemayorga/image/upload/v1614740411/artist-project/Kevin_Graham-Ablaze-A1_qev4ga.png'

const ExploreNew = () => (
  <div className="explore-new-container">
    <h3 className="explore-new__title">Explore our new search filters</h3>
    <div className="explore-new__slider-container">
      <Slider {...settings}>
        <figure className="explore-new__carousel-figure">
          <img
            className="explore-new__carousel-image"
            src={PICTURE}
            alt="Ablaze - Kevin Graham"
            title="Ablaze - Kevin Graham"
          />
        </figure>
        <figure className="explore-new__carousel-figure">
          <img
            className="explore-new__carousel-image"
            src={PICTURE}
            alt="Ablaze - Kevin Graham"
            title="Ablaze - Kevin Graham"
          />
        </figure>
        <figure className="explore-new__carousel-figure">
          <img
            className="explore-new__carousel-image"
            src={PICTURE}
            alt="Ablaze - Kevin Graham"
            title="Ablaze - Kevin Graham"
          />
        </figure>
        <figure className="explore-new__carousel-figure">
          <img
            className="explore-new__carousel-image"
            src={PICTURE}
            alt="Ablaze - Kevin Graham"
            title="Ablaze - Kevin Graham"
          />
        </figure>
        <figure className="explore-new__carousel-figure">
          <img
            className="explore-new__carousel-image"
            src={PICTURE}
            alt="Ablaze - Kevin Graham"
            title="Ablaze - Kevin Graham"
          />
        </figure>
      </Slider>
    </div>
  </div>
)

export default ExploreNew
