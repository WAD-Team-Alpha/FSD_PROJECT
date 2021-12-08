import React from 'react'
import { styled } from '@mui/material/styles';
import { Container, Typography, Box, Divider, Link } from '@mui/material';
import Slider from './slider/slider';
import Content from './content';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Box sx={{ height: '2em' }} />
            <Container maxWidth="xl">

                <Box sx={{display: 'flex'}}>
                    <Typography variant="h5" sx={{ fw: '900', paddingBottom: '.5em', flexGrow: '1' }}>Trending</Typography>
                    <Link component="button" sx={{ color: "#6e71f8" }} underline="none">View more</Link>
                </Box>
                <Divider />
                <Content />
                <Box sx={{ height: '5em' }} />

                <Box sx={{display: 'flex'}}>
                    <Typography variant="h5" sx={{ fw: '900', paddingBottom: '.5em', flexGrow: '1' }}>Recently Viewed</Typography>
                    <Link component="button" sx={{ color: "#6e71f8" }} underline="none">View more</Link>
                </Box>
                <Divider />
                <Content />
                <Box sx={{ height: '5em' }} />

                <Box sx={{display: 'flex'}}>
                    <Typography variant="h5" sx={{ fw: '900', paddingBottom: '.5em', flexGrow: '1' }}>Electronics</Typography>
                    <Link component="button" sx={{ color: "#6e71f8" }} underline="none">View more</Link>
                </Box>
                <Divider />
                <Content />
                <Box sx={{ height: '5em' }} />

                <Box sx={{display: 'flex'}}>
                    <Typography variant="h5" sx={{ fw: '900', paddingBottom: '.5em', flexGrow: '1' }}>Sports</Typography>
                    <Link component="button" sx={{ color: "#6e71f8" }} underline="none">View more</Link>
                </Box>
                <Divider />
                <Content />
                <Box sx={{ height: '5em' }} />

                <Box sx={{display: 'flex'}}>
                    <Typography variant="h5" sx={{ fw: '900', paddingBottom: '.5em', flexGrow: '1' }}>Clothes</Typography>
                    <Link component="button" sx={{ color: "#6e71f8" }} underline="none">View more</Link>
                </Box>
                <Divider />
                <Content />
                <Box sx={{ height: '5em' }} />

                <Box sx={{display: 'flex'}}>
                    <Typography variant="h5" sx={{ fw: '900', paddingBottom: '.5em', flexGrow: '1' }}>Entertainment</Typography>
                    <Link component="button" sx={{ color: "#6e71f8" }} underline="none">View more</Link>
                </Box>
                <Divider />
                <Content />
                <Box sx={{ height: '5em' }} />
                
                <Box sx={{display: 'flex'}}>
                    <Typography variant="h5" sx={{ fw: '900', paddingBottom: '.5em', flexGrow: '1' }}>Movies</Typography>
                    <Link component="button" sx={{ color: "#6e71f8" }} underline="none">View more</Link>
                </Box>
                <Divider />
                <Content />
                <Box sx={{ height: '5em' }} />
            </Container>
        </div>
    )
}

export default Home
