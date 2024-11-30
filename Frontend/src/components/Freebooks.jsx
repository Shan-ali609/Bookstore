import React,{useState , useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Cards from './Cards';

export default function Freebooks() {
  const[book , setbook]= useState([]);
  useEffect(()=>{
    const getbook = async()=>{
    try {
  //  const res = await axios.get('http://localhost:4001/book')
    const res = await axios.get('https://bookstore-api-mu.vercel.app')

      const data = res.data.filter((data) => data.category === "Free")
      setbook(data)
    } catch (error) {
      console.log(error);
      
    }

    }
   getbook();
  }, [])

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
                    {book.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}
