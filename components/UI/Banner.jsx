import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../../styles/banner.module.css";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import CardImg from '../../public/images/movie01.png';

const Banner = ({ children }) => {
    return <section className={`${classes.cardcomponent}`}>
    <Container>
        <Row>
            {/* ========== card img ============= */}
            <Col lg="12" md="12">
                <div className={`full_width_banner text-end`}>
                    <Image alt="movie-image" src={CardImg} width="500px" height="700px" />
                </div>
            </Col>
        </Row>
    </Container>
</section>
};

export default Banner;