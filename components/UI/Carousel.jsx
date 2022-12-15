import React, { Component } from 'react';
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/carousel.module.css";
import CarouselItem from './CarouselItem';

export default class NextJsCarousel extends Component {
    render() {
        //let similarMovies;
        const [similarMovies, setSimilarMovies] = new Array();
        const fetchConfig = () => {
            axios.get(`https://api.themoviedb.org/3/movie/550/similar?api_key=${process.env.apiKeyDb}`)
                .then((response) => {
                    setSimilarMovies(response.data.results)
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                });
        }
        console.log("----------------" + fetchConfig);

        return (
            <Container className={`${classes.carousel_top}`} >
                <Carousel>
                    {similarMovies?.map((item) => (
                        <Col lg="4" md="4" sm="6" key={item.id}>
                            <CarouselItem item={item} />
                        </Col>
                    ))}
                </Carousel>
            </Container>
        );
    }
};
