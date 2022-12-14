import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import classes from '../../styles/cardcomponent.module.css';

const CardComponent = () => {
    const [movieData, setFact] = useState("");
    const fetchFact = () => {
        axios.get(`https://api.themoviedb.org/3/movie/978?&api_key=${process.env.apiKeyDb}`)
            .then((response) => {
                setFact(response.data)
            });
    }
    useEffect(() => {
        fetchFact()
    }, []);

    const handleMovies = () => {
        fetchFact()
    }

    const baseUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "h632";
    const imgPath = baseUrl + posterSize + movieData.poster_path;

    return <section className={`${classes.cardcomponent}`}>
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className={`${classes.hero__content}`} onLoad={() => handleMovies()}>
                        <SectionSubtitle subtitle="Inpisration" />
                        <h2 className="mt-3 mb-3">{movieData.original_title}</h2>
                        <h5 className="mb-4">Drama</h5>
                        <p>{movieData.overview}</p>
                        <div className="mt-5">
                            <button className="primary__btn">
                                <Link href="#">Add to favourites</Link>
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg="6" md="6">
                    <div className={`${classes.Image} text-end`}>
                        <Image alt="movie-image" src={imgPath} width="500" height="400" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default CardComponent