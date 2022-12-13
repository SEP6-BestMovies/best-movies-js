import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from '../../styles/cardcomponent.module.css'
import ComponentItem from "./ComponentItem";

const SmallCardComponent = () => {

    const [config, setConfig] = useState("");
    const fetchConfig = () => {
      axios.get(`https://api.themoviedb.org/3/configuration?api_key=`)
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
    console.log(config)

    const [moviesData, setPopular] = useState(new Array());
    const fetchPopular = () => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=`)
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
        <section id="portfolio" onLoad={() => handlePopular()} onLoadStart={() => handleConfig()}>
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
                            >
                                Action
                            </button>
                            <button
                                className={`${filter === "fantasy" ? active : ""
                                    } secondary__btn text-white`}
                                onClick={() => setFilter("fantasy")}
                            >
                                Fantasy
                            </button>
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
