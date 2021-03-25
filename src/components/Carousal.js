import { Carousel } from 'react-bootstrap';
import React from 'react'
import CarousalItem from './CarousalItem';

function Carousal() {
    return (
        <Carousel> 
            <Carousel.Item>
                <CarousalItem imgUrl="https://www.shabdalaya.com/uploads/home_banner/shabdalaya-advt-1.jpg" content="विश्व मराठी संमेलनानिमित्त ४०% पर्यन्त सवलत." />
            </Carousel.Item>
        
            <Carousel.Item>
                <CarousalItem imgUrl="https://www.shabdalaya.com/uploads/home_banner/website-flyer.jpg" content="रंगनाथ पठारे लिखित सातपाटील कुलवृत्तान्त" />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousal
