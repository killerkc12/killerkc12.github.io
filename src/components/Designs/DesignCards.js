import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import './DesignCards.css'

import {BsGithub} from 'react-icons/bs'
import { IoMdRocket } from 'react-icons/io'

const DesignCards = (data) => {
    return (
        <div className="design__body">
            <h2>{data.name}</h2>
            <Carousel className="design__carousel">
                {
                    data.img1 ? 
                    (
                        <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {data.img1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ) : null
                }
                {
                    data.img2 ? 
                    (
                        <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {data.img2}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ) : null
                }
                {
                    data.img3 ? 
                    (
                        <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {data.img3}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ) : null
                }
                {
                    data.img4 ? 
                    (
                        <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {data.img4}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ) : null
                }
                
            </Carousel>
            <Row className="design__bottom">
                <Col>
                    <a href={data.github} target="blank">
                        <button>
                            <BsGithub/>   Github
                        </button>
                    </a>
                </Col>
                <Col>
                    <a href={data.hosted} target="blank">
                        <button>
                            <IoMdRocket/>   Hosted
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default DesignCards
