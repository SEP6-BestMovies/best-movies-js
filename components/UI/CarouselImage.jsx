import React, { useState } from "react";
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../../styles/carousel-image.module.css'

function CarouselImage(props) {
  
  const [images, setImages] = useState([])
    axios.get(`https://api.themoviedb.org/3/movie/550/similar?api_key=${process.env.apiKeyDb}`)
      .then(response => {
        setImages(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });

  const baseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "h632";

  const movie_paths = [];
  for (let index = 0; index < images.length; index++) {
    const element = images[index];
    const imgPath = baseUrl + posterSize + element.poster_path;
    movie_paths.push(imgPath)
  }

  return (
    <Carousel className={`${classes.carousel_top}`}>
      {movie_paths.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className={`${classes.carousel_img}`}
            src={image}
            alt={image.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselImage;
