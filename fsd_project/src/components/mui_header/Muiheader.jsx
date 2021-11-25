import { AppBar, Avatar, Toolbar, Typography } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../img/logo.jpg'

const Muiheader = () => {
  return (
    <AppBar>
      <Toolbar sx={{
        backgroundColor: "#05386B",
      }}>
        <Avatar
          src={logo}
          variant="rounded"
          sx={{
            width: '9em',
          }} />
      </Toolbar>
    </AppBar>
  )
}

export default Muiheader
