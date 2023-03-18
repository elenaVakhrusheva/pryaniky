import React, { useState, useEffect } from 'react';
//import './App.css';
import { Avatar, Box, Button, Checkbox, Container, createTheme, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Api from '../../utils/Api';

export default function Login() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('shop-item'));
  console.log(token);
  const [api, setApi] = useState(new Api(token));
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handler = e => {
    e.preventDefault();
    api.getLogIn({ "username": userName, "password": password })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }

  useEffect(() => {
    setApi(new Api(token));
  }, [token])

  useEffect(() => {
    fetch("https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/get", {
      headers: {
        'x-auth': `${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      });

    //.then(data => setTable(data.id));
  }, [])
 

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handler} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            autoFocus
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            token={token}
            setToken={setToken}
            api={api}
            setApi={setApi}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>

  );
}