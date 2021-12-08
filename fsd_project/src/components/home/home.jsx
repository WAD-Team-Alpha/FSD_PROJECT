import React from 'react'
import { styled } from '@mui/material/styles';
import { Container, Typography, Box, Divider } from '@mui/material';
import Slider from './slider/slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Box sx={{height: '2em'}} />
            <Container maxWidth="xl">
                <Typography variant="h5" sx={{fw: '900', paddingBottom:'.5em'}}>Trending</Typography>
                <Divider />
                <Content />
            </Container>
        </div>
    )
}

export default Home
