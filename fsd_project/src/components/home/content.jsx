import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { styled, alpha } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const Content = () => {
    let settings = {
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dots: true,
        pauseOnHover: false
    };

    return (
        <Slider {...settings}>
            
        </Slider>
    );
}

export default MySlider;