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
        color: 'white',
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
        height: '14em',
    }));

    return (
        <Slider {...settings}>
            <Img src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=500&q=60" alt="A" />
            <Img src="https://wallpaperaccess.com/full/981402.jpg" alt="B" />
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmQ1m-EwIY5jTU-AW5gODCbKiyoPcY89alA&usqp=CAU" alt="C" />
        </Slider>
    );
}

export default MySlider;