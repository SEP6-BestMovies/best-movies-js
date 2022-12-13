import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import CardImg from '../../public/images/movie01.png';
import classes from '../../styles/cardcomponent.module.css';

const CardComponent = () => {
    const key = process.env.API_KEY;

    const [movieData, setFact] = useState("");
    const fetchFact = () => {
        axios.get(`https://api.themoviedb.org/3/movie/550?&api_key=${process.env.apiKeyDb}`)
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

    const [popularMovies, setPopular] = useState(new Array());
    const fetchPopular = () => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apiKeyDb}`)
            .then((response) => {
                setPopular(response.data.results)
            });
    }
    useEffect(() => {
        fetchPopular()
    }, []);

    const handlePopular = () => {
        fetchPopular()
    }
    return <section className={`${classes.cardcomponent}`}>
        <Container>
            <Row>
                {/* ========== card content ============= */}

                <Col lg="6" md="6">
                    <div className={`${classes.hero__content}`} onLoad={() => handleMovies()}>
                        <SectionSubtitle subtitle="Popular right now" />
                        <h2 className="mt-3 mb-3">{movieData.original_title}</h2>
                        <h5 className="mb-4">Drama</h5>
                        <p>{movieData.overview}</p>
                        <div className="mt-5">
                            <button className="primary__btn">
                                <Link href="#">Add to favourites</Link>
                            </button>
                            <button className="secondary__btn">
                                <Link href="#">Read more</Link>
                            </button>
                        </div>
                    </div>
                </Col>

                {/* ========== card img ============= */}
                <Col lg="6" md="6">
                    <div className={`${classes.Image} text-end`}>
                        <Image alt="movie-image" src={CardImg} width="700" height="400" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default CardComponent