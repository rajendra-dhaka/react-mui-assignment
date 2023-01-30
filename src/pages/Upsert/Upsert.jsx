import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addUser, updateUser } from '../../redux/userReducer';
import './Upsert.scss';

export const Upsert = () => {
  const users = useSelector((state) => state.userReducer.users);
  const [userData, setUserData] = useState({ id: +users?.at(-1)?.id + 1 || 1, first_name: '', last_name: '' });
  const navigate = useNavigate();
  const { userId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      const editableUser = users.filter((user) => user.id === +userId);
      setUserData(...editableUser);
    }
  }, [users]);

  const handleChange = (e) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleData = () => {
    !userId ? dispatch(addUser(userData)) : dispatch(updateUser(userData));
    navigate('/users');
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <Typography align='center' variant='h5'>
        {userId ? 'Edit' : 'Add'} Form
      </Typography>
      <CardContent className='form-fields'>
        <TextField
          name='id'
          label='Id'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
          value={userData?.id}
        />
        <TextField
          name='first_name'
          label='First Name'
          variant='standard'
          onChange={handleChange}
          value={userData?.first_name}
        />
        <TextField
          name='last_name'
          label='Last Name'
          variant='standard'
          onChange={handleChange}
          value={userData?.last_name}
        />
        <TextField name='email' label='Email' variant='standard' onChange={handleChange} value={userData?.email} />
      </CardContent>
      <CardActions>
        <Button size='small' onClick={handleData}>
          SAVE
        </Button>
        <Button size='small' onClick={() => navigate('/users')}>
          CANCEL
        </Button>
      </CardActions>
    </Card>
  );
};
