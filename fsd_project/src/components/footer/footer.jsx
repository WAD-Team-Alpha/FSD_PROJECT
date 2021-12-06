import { Drawer, IconButton, Typography } from '@mui/material';
import { React, useState } from 'react';
import classes from './footer.module.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import Nav from '../nav/nav'
import FooterContent from './footer_content';

const Footer = () => {
    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        console.log("I am executed");
        open == false ? setOpen(true) : setOpen(false);
    };

    return <footer>
        <Drawer
            sx={{
                '& .MuiDrawer-paper': {
                    zIndex: '0',
                    marginBottom: '5em',
                },
            }}
            variant="persistent"
            anchor="bottom"
            open={open}
        >
            <FooterContent />
        </Drawer>
        <div className={classes.footer}>
            <Box sx={{ display: 'flex' }}>
                <IconButton
                    size="large"
                    onClick={handleDrawer}
                >
                    <KeyboardArrowUpIcon sx={{
                        fontSize: '2em',
                        color: '#5CDB95',
                        marginLeft: '10px',
                        marginTop: '5px',
                    }} />
                </IconButton>
                <Typography variant="h5" sx={{ mt: '3.5em', width: "100%", textAlign: "center", fontSize: ".83em", color: "#828282" }}>
                    Copyright &copy; 2021-2022 FSD-GROUP-8. All Rights Reserved
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                    }}
                >
                    <IconButton><InstagramIcon sx={{ color: 'white', fontSize: '1.5em' }} /></IconButton>
                    <IconButton><FacebookIcon sx={{ color: 'white', fontSize: '1.5em' }} /></IconButton>
                    <IconButton><YouTubeIcon sx={{ color: 'white', fontSize: '1.5em' }} /></IconButton>
                    <IconButton><TwitterIcon sx={{ color: 'white', fontSize: '1.5em' }} /></IconButton>
                    <IconButton><GitHubIcon sx={{ color: 'white', fontSize: '1.5em' }} /></IconButton>
                </Box>
            </Box>
        </div>
    </footer>
}

export default Footer