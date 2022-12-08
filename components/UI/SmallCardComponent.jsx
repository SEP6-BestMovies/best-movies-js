import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from '../../styles/cardcomponent.module.css'
import ComponentItem from "./ComponentItem";
import moviesData from '../data/front-page';

const SmallCardComponent = () => {
    const [filter, setFilter] = useState("action");
    const [data, setData] = useState();

    useEffect(() => {
        if (filter === "action") {
            const filteredData = moviesData.filter(
                (item) => item.category === filter
            );
            setData(filteredData);
        }

        if (filter === "fantasy") {
            const filteredData = moviesData.filter(
                (item) => item.category === filter
            );

            setData(filteredData);
        }
    }, [filter]);

    const active = `${classes.tab__btn__active}`;

    return (
        <section id="portfolio">
            <Container>
                <Row>
                    <Col lg="6" md="6" className="mb-5">
                        <SectionSubtitle subtitle="Categories" />
                    </Col>

                    <Col lg="6" md="6">
                        <div className={`${classes.tab__btns} text-end`}>
                            <button
                                className={` ${filter === "Mobile App" ? active : ""
                                    } secondary__btn text-white`}
                                onClick={() => setFilter("Mobile App")}
                            >
                                Action
                            </button>
                            <button
                                className={`${filter === "Web Design" ? active : ""
                                    } secondary__btn text-white`}
                                onClick={() => setFilter("Web Design")}
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
