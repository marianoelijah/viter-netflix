import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FilmSlider from "./FilmSlider";

const FilmCollection = () => {
  const filmCollectionArray = [
    {
      img: "slider-1.jpg",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Comedy",
      title: "Young Sheldon",

    },
    {
      img: "slider-2.jpg",
      quality: "HD",
      duration: "2hr 30min",
      genre: "Action-Adventure",
      title: "Alita",
    },
    {
      img: "slider-3.jpg",
      quality: "HD",
      duration: "2hr 50min",
      genre: "Drama",
      title: "Hello Love Goodbye",
    },
    {
      img: "slider-4.jpg",
      quality: "HD",
      duration: "1hr",
      genre: "Horror",
      title: "Insideous: The Red Door",
    },
    {
      img: "slider-5.webp",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Drama",
      title: "Missed Connections",
    },
    {
      img: "slider-6.webp",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Thriller",
      title: "13 Reasons Why",
    },
    {
      img: "slider-7.jpg",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Love & Friendship",
      title: "The In-Between",
    },
    {
      img: "slider-8.jpg",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Drama & Friendship",
      title: "Sex Education",
    },
    {
      img: "slider-9.jpg",
      quality: "HD",
      duration: "1hr 50min",
      genre: "Action-Adventure",
      title: "Multiverse of Madness",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="film-collection py-3 bg-primary text-white">
      <div className="container">
        <div className="title flex justify-between items-center mt-10">
          <h2 className="text-white">Top Movies</h2>
          <ul className="flex gap-4">
            <li>
              <ChevronLeft size={18} />
            </li>
            <li>
              <ChevronRight size={18} />
            </li>
          </ul>
        </div>
        <Slider {...settings}>
          {filmCollectionArray.map((item, key) => (
            <FilmSlider item={item} key={key} />
          ))}
        </Slider>
        <div className="title flex justify-between items-center mt-10">
          <h2 className="text-white">Trending Movies</h2>
          <ul className="flex gap-4">
            <li>
              <ChevronLeft size={18} />
            </li>
            <li>
              <ChevronRight size={18} />
            </li>
          </ul>
        </div>
        <Slider {...settings}>
          {filmCollectionArray.map((item, key) => (
            <FilmSlider item={item} key={key} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FilmCollection;