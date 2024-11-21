import React from 'react';
import list from '../list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

export default function Freebooks() {
    const bookdetail = list.filter((data) => data.category === "Free");
    console.log(bookdetail);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };

    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='text-xl pb-3 font-medium'>Free Offered Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus sunt asperiores odio unde, consectetur voluptatem totam dolores.</p>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {bookdetail.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}
