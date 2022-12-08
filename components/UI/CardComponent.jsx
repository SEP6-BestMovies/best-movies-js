import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import CardImg from '../../public/images/movie01.png'
import classes from '../../styles/cardcomponent.module.css'


const CardComponent = () => {
    return <section className={`${classes.cardcomponent}`}>
        <Container>
            <Row>
                {/* ========== card content ============= */}
                <Col lg="6" md="6">
                    <div className={`${classes.hero__content}`}>
                        <SectionSubtitle subtitle="Popular right now" />
                        <h2 className="mt-3 mb-3">Black Adam</h2>
                        <h5 className="mb-4">Action</h5>
                        <p>
                            Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian
                            gods — and imprisoned just as quickly—Black Adam is freed from his earthly tomb,
                            ready to unleash his unique form of justice on the modern world.
                        </p>
                        <div className="mt-5">
                            <button className="primary__btn">
                                <Link href="#">Add to list</Link>
                            </button>

                            <button className="secondary__btn">
                                <Link href="#">Read more</Link>
                            </button>
                        </div>
                    </div>
                </Col>

                {/* ========== card img ============= */}
                <Col lg="6" md="6">
                    <div className={`${classes.hero__img} text-end`}>
                        <Image alt="movie-image" src={CardImg} width="700" height="400" />
                    </div>
                </Col>
            </Row>
            <Row>
                {/* ========== card img ============= */}
                <Col lg="6" md="6">
                    <div className={`${classes.hero__img} text-end`}>
                        <Image alt="movie-image" src={CardImg} width="700" height="400" />
                    </div>
                </Col>
                {/* ========== card content ============= */}
                <Col lg="6" md="6">
                    <div className={`${classes.hero__content}`}>
                        <SectionSubtitle subtitle="Popular right now" />
                        <h2 className="mt-3 mb-3">Black Adam</h2>
                        <h5 className="mb-4">Action</h5>
                        <p>
                            Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian
                            gods — and imprisoned just as quickly—Black Adam is freed from his earthly tomb,
                            ready to unleash his unique form of justice on the modern world.
                        </p>
                        <div className="mt-5">
                            <button className="primary__btn">
                                <Link href="#">Add to list</Link>
                            </button>

                            <button className="secondary__btn">
                                <Link href="#">Read more</Link>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default CardComponent