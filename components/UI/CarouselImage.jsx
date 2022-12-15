import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselImage(props) {
  const [images, setImages] = useState([]);

    axios.get(`https://api.themoviedb.org/3/movie/550/similar?api_key=${process.env.apiKeyDb}`)
      .then(response => {
        setImages(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });

  const baseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "h632";
  const imgPath = baseUrl + posterSize + images.poster_path;

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={imgPath}
            alt={image.alt}
          />
          <Carousel.Caption>
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselImage;
