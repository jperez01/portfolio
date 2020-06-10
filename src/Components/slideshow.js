import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

/**
 * Component that creates a slideshow of images for my projects
 * @param {Array} props used to get links for images
 */
const Slideshow = (props) => {
    const links = props.links;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    }
    
    return (
        <div className="slideshow">
            <Slider {...settings}>
                <img alt={links[0]} className='slide' src={links[0]} />
                <img alt={links[0]} className='slide' src={links[1]} />
                <img alt={links[0]} className='slide' src={links[2]} />
            </Slider>
        </div>
    )
}

export default Slideshow;