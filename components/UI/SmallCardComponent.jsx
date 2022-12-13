import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from '../../styles/cardcomponent.module.css'
import ComponentItem from "./ComponentItem";

const SmallCardComponent = () => {
    const [genre, setGenre] = useState("");
    const fetchGenre = () => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${config.apiKey}&language=en-US`)
            .then((response) => {
                setGenre(response.data)
            });
    }
    useEffect(() => {
        fetchConfig()
    }, []);

    const handleGenre = () => {
        fetchConfig()
    }
    console.log(genre)


    const [config, setConfig] = useState("");
    const fetchConfig = () => {
        axios.get(`https://api.themoviedb.org/3/configuration?api_key=${config.apiKey}`)
            .then((response) => {
                setConfig(response.data)
            });
    }
    useEffect(() => {
        fetchConfig()
    }, []);

    const handleConfig = () => {
        fetchConfig()
    }

    const [moviesData, setPopular] = useState(new Array());
    const fetchPopular = () => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${config.apiKey}`)
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
    console.log(moviesData);

    const [filter, setFilter] = useState("action");
    const [data, setData] = useState();

    useEffect(() => {
        /*
        if (filter === "action") {
            for (var i = 0; i < moviesData.length; i++) {
                const filteredData = moviesData.filter(
                    (item) => moviesData[i].genre_ids.includes(14)
                );
                setData(filteredData);
            }
        }
        */

        if (filter === "action") {
            const filteredData = moviesData.filter(
                (item) => item.adult === false
            );
            setData(filteredData);
        }


        if (filter === "fantasy") {
            const filteredData = moviesData.filter(
                (item) => item.adult === false
            );

            setData(filteredData);
        }
    }, [filter]);

    const active = `${classes.tab__btn__active}`;

    return (
        <section id="portfolio" onLoad={() => handlePopular()} onLoadStart={() => handleConfig()} onLoadedData={() => handleGenre()}>
            <Container>

                <Row>
                    <Col lg="6" md="6" className="mb-5">
                        <SectionSubtitle subtitle="Popular" />
                    </Col>

                    <Col lg="6" md="6">
                        <div className={`${classes.tab__btns} text-end`}>
                            <button
                                className={` ${filter === "action" ? active : ""
                                    } secondary__btn text-white`}
                                onClick={() => setFilter("action")}
                            ></button>
                            <button
                                className={`${filter === "fantasy" ? active : ""
                                    } primary__btn text-white`}
                                onClick={() => setFilter("fantasy")}
                            >View popular movies</button>
                        </div>
                    </Col>

                    {data?.map((item) => (
                        <Col lg="4" md="4" sm="6" key={item.id}>
                            <ComponentItem item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default SmallCardComponent;
