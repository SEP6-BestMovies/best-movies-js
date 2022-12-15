import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Carousel>
      {movie_paths.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={image.alt}
          />
          <Carousel.Caption>
            <h3>{image}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselImage;
