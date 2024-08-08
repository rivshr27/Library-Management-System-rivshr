import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2018/02/27/09/36/library-3185061_1280.jpg"
                        alt="First slide"
                    />
                  
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3> */}
                        <p>A room without books is like a body without a soul..
                            <style>
                                font
                            </style>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2024/04/19/12/13/ai-generated-8706226_1280.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3> */}
                        <p>Books are a uniquely portable magic..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.voicesofruralindia.org/wp-content/uploads/2020/11/ylswjsy7stw-2048x1201.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3> */}
                        <p>Be yourself; everyone else is already taken.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
