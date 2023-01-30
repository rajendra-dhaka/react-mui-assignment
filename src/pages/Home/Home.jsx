import React from 'react';
import './Home.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='home'>
      <Card sx={{ minWidth: 275 }} className='card'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom variant='h6' align='center'>
            Burg Assignment
          </Typography>
        </CardContent>
        <CardActions className='cta'>
          <Link to='/users'>
            <Button size='large' variant='contained'>
              CRUD
            </Button>
          </Link>
          <Link to='/chart'>
            <Button size='large' variant='outlined'>
              CHART
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
