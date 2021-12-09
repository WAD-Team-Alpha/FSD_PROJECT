import React from 'react';
import Footer from './components/footer/footer';
import Muiheader from './components/mui_header/Muiheader'
import Drawer from '@mui/material/Drawer';
import Nav from './components/nav/nav';

const Layout = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        console.log("I am executed");
        open == false ? setOpen(true) : setOpen(false);
    };
    
    return (
        <React.Fragment>
            <Muiheader state={handleDrawer} signinHandler={props.signinHandler}/>
            <Drawer
                sx={{
                    '& .MuiDrawer-paper': {
                        zIndex: '1',
                        marginTop: '3.5em',
                    },
                }}
                variant="persistent"
                anchor="top"
                open={open}
            >
                <Nav></Nav>
            </Drawer>
            <div>
                {props.children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
