import { AppBar, Avatar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import logo from '../../img/logo.jpg'
import Searchbar from './search_bar/searchbar'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AccountMenu from './Account';

const Muiheader = (props) => {
  return (
    <>
      <AppBar>
        <Toolbar sx={{
          backgroundColor: "#05386B",
          zIndex: '5',
        }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={props.state}
          >
            <MenuIcon sx={{ fontSize: '1.4em', }} />
          </IconButton>
          <Avatar
            src={logo}
            variant="rounded"
            sx={{
              width: '9em',
            }} />
          <Searchbar />
          <Box sx={{ flexGrow: 1, }} />
          <Button variant="outlined" sx={{
            color: '#5CDB95',
            fontSize: '1em',
            ":hover": {
              color: '#5CDB95',
            }
          }}>Signin</Button>
          <AccountMenu />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Muiheader
