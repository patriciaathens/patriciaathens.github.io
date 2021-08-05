import React, { Component } from 'react';
import Contrast from '../images/formalfocus_finals/PatriciaAcorda_Contrast.jpg';
import Light from '../images/formalfocus_finals/PatriciaAcorda_Light.jpg';
import Line from '../images/formalfocus_finals/PatriciaAcorda_Line.jpg';
import Scale from '../images/formalfocus_finals/PatriciaAcorda_Scale.jpg';
import Shape from '../images/formalfocus_finals/PatriciaAcorda_shape.jpg';
import Point from '../images/formalfocus_finals/Point_PatriciaAcorda.jpg';

import Carousel from 'react-bootstrap/Carousel'

class Designs extends Component {
    state = {  }
    render() { 
        return (
            <main className="rounded d-flex flex-column">
            <section className="p-2">
                <h1>What else?</h1>
                <p>
                    In addition to my fullstack work, I'm also passionate about art and design!
                    Below you'll find some of my edited photographs for a previous graphic design class as well as other work that may not fall under the software development category.
                </p>
            </section>
            <section className="p-2">
                <p>
                    This carousel features some of the work for my college Graphic Design class, particularly some of my "Formal Focus" photos which center around the basic principles of design.
                </p>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Contrast}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Light}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Line}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Shape}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Scale}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Point}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
            </section>
        </main>
        );
    }
}
 
export default Designs;