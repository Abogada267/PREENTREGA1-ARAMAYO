// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';

export function ImageCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="https://i.pinimg.com/originals/d1/50/eb/d150eb3e38099f2721820c3fc4cf6642.jpg" alt="Imagen Laboral" style={{ width: '100%' }} />
            </div>
            <div>
                <img src="=" alt="Imagen Derecho Penal" />
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVyC-QXcCfGZPfZNDWEV66iT4Eaz0EoSv0Q&usqp=CAU" alt="Imagen Familia Diversa" style={{ width: '100%' }} />
            </div>
        </Slider>
    );
}
