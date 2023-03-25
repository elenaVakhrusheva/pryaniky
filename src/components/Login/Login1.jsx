import React, { useState, useEffect } from 'react';
//import './App.css';
import { Avatar, Box, Button, Container, CssBaseline, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Api from '../../utils/Api';
import { BrowserRouter } from 'react-router-dom';

export default function Login() {
  const [data, setData] = useState({ data: [] });
  const [token, setToken] = useState(localStorage.getItem('userItem'));
  console.log(token);
  const [api, setApi] = useState(new Api(token));
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [table, setTable] = useState('');

  /*   const handler = e => {
      e.preventDefault();
      api.getLogIn({ "username": userName, "password": password })
        .then((res) => { res.json() })
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch(err => {
          console.log(err);
        })
    }
   */

  useEffect(() => {
    setApi(new Api(token));
  }, [token])

/*  useEffect(() => {
    fetch("https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/get", {
      headers: {
        'x-auth': `${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data.data);
      });

    //.then(data => setTable(data.id));
  }, [token]) 
 */

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/get', {
        method: 'GET',
        headers: {
          'x-auth': `${token}`
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
       
      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
      console.log(setData(data))
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <BrowserRouter>
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
          <Box component="form"/*  onSubmit={handler}  */ noValidate sx={{ mt: 1 }}>
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
              onClick={handleClick}
            >
              <Link to='/Dashboard'>Sign In</Link>
            </Button>
          </Box>
        </Box>
      </Container>
    </BrowserRouter>
  );
}