import React from 'react';
import './Navbar.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const { pathname } = useLocation();
  const icon = pathname === '/' ? <MenuIcon /> : <ArrowBackIosIcon />;
  return (
    <Box sx={{ flexGrow: 1 }} className='navbar'>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Link to='/'>
            <IconButton edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
              {icon}
            </IconButton>
          </Link>
          <Typography variant='h6' color='inherit' component='div'>
            Burg
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
