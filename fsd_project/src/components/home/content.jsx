import React from "react";
import Slider from "react-slick";
import Card from './ContentCard'
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Box from '@mui/material/Box';

const LeftArrow = (props) => {
    const {className, onClick} = props
    return props.currentSlide != 0 ? (
        <Box className={className} onClick={onClick} sx={{color: 'red', width: '47px', height: '17.3rem', ":hover": {color: "black", backgroundColor: "rgba(0, 0, 0, 0.8)"}, backgroundColor: "rgba(0, 0, 0, 0.4)", "::before": {display: 'none',}, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '1', left: '0', borderTopRightRadius: '10px', borderBottomRightRadius: '10px'}}>
            <KeyboardArrowLeft style={{color: '#5CDB95', fontSize: '3rem'}} />
        </Box>
    ) : <Box></Box>
}

const RightArrow = (props) => {
    const {className, onClick} = props
    return props.currentSlide != 6 ? (
        <Box className={className} onClick={onClick} sx={{color: 'red', width: '47px', height: '17.3rem', ":hover": {color: "black", backgroundColor: "rgba(0, 0, 0, 0.8)"}, backgroundColor: "rgba(0, 0, 0, 0.4)", "::before": {display: 'none',}, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '1', right: '0', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
            <KeyboardArrowRight style={{color: '#5CDB95', fontSize: '3rem'}} />
        </Box>
    ) : <Box></Box>
}

const Content = () => {
    let settings = {
        prevArrow: <LeftArrow />,
        nextArrow: <RightArrow />,
        infinite: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 100,
        dots: false,
        initialSlide: 0,
    };

    const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <Slider {...settings}>
            {cards.map((data, index) => {
                return <Card key={data} />
            })}
        </Slider>
    );
}

export default Content;