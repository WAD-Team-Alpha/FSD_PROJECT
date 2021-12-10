import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useDispatch} from "react-redux";
import { authActions } from '../store/auth';

const AccountMenu = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logoutHandler = () => {
        dispatch(authActions.logout());
    }
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    <Avatar sx={{ width: '2.2em', height: '2.2em' }} />
                </IconButton>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 28,
                            height: 28,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 25,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem sx={{fontSize: "0.9em"}}>
                    <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem sx={{fontSize: "0.9em"}}>
                    <ListItemIcon>
                        <Settings fontSize="medium" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={logoutHandler} sx={{fontSize: "0.9em"}}>
                    <ListItemIcon >
                        <Logout fontSize="medium" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

export default AccountMenu;