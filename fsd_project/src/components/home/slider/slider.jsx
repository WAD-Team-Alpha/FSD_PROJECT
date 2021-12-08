import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { styled, alpha } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    mydots: {
        position: "absolute",
        bottom: '20px',
        zIndex: '0',
        display: 'flex',
        left: '50%',
        transform: 'translateX(-50%)',
    },
  }),
);

const MySlider = () => {
    const style = useStyles()
    let settings = {
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        dots: true,
        dotsClass: `slick-dots ${style.mydots}`,
        pauseOnHover: false
    };

    const Img = styled('img')(({ theme }) => ({
        height: '15em',
    }));

    return (
        <Slider {...settings}>
            <Img src="https://htmlcolorcodes.com/assets/images/colors/neon-orange-color-solid-background-1920x1080.png" alt="A" />
            <Img src="https://htmlcolorcodes.com/assets/images/colors/shamrock-green-color-solid-background-1920x1080.png" alt="B" />
            <Img src="https://htmlcolorcodes.com/assets/images/colors/light-violet-color-solid-background-1920x1080.png" alt="C" />
        </Slider>
    );
}

export default MySlider;