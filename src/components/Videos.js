import React, { Component } from 'react';
import Slider from 'react-slick';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          vid: 'https://player.vimeo.com/video/181846153',
          title: 'Gap Yr Boiz',
          artist: 'T-Rextasy',
        },
        {
          vid: 'https://player.vimeo.com/video/542895126',
          title: 'LET YOU SPEAK',
          artist: 'MYD',
        },
        {
          vid:
            'https://player.vimeo.com/video/176486858?color=ffffff&title=0&byline=0&portrait=0&badge=0',
          title: 'Melt',
          artist: 'Jones',
        },
      ],
      open: false,
      index: '',
      elements: null,
    };
  }

  slideClicked = e => {
    e.preventDefault();
    console.log(e.type);
  };

  render() {
    const { open } = this.state;
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <button
        {...props}
        className={
          'slick-prev slick-arrow' +
          (currentSlide === 0 ? ' slick-disabled' : '')
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
      >
        Previous
      </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <button
        {...props}
        className={
          'slick-next slick-arrow' +
          (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
      >
        Next
      </button>
    );

    const settings = {
      arrows: true,
      centerMode: true,
      edgeFriction: 1,
      infinite: false,
      swipeToSlide: true,
      variableWidth: true,
      accessibility: true,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      focusOnSelect: true,
      draggable: true,
    };

    return (
      <div className="videos">
        <h1 id="videos" className="videos__title">
          Videos
        </h1>
        <div className="slides">
          <Slider {...settings}>
            {this.state.slides.map((slide, index) => {
              return (
                <div key={index}>
                  <iframe
                    src={slide.vid}
                    width="640"
                    height="360"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    data-index={index}
                  ></iframe>
                  <h4 className="videos__slide-title">{slide.title}</h4>
                  <h4 className="videos__slide-artist">{slide.artist}</h4>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="videos__btn-container">
          <a href="#">
            <button className="videos__button">Listen Now</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Video;
