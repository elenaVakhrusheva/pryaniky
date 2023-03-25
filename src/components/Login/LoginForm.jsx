import React from 'react';
import superagent from 'superagent';
import { Button, TextField } from '@mui/material';
import NotFound from '../NotFound/NotFound';

export default class LoginForm extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      statusCode: null
    }
  }

  handleUsernameChanged(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
  }

  submitForm(event) {
    event.preventDefault();
    superagent
      .post('https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/login')
      .send({
        username: this.state.username,
        password: this.state.password
      })
      .end((err, res) => {
        if (err) {
          this.setState({ errorMsg: "Authorization Failed" });
          return;
        }
        //localStorage.setItem('token', res.body.token);
        localStorage.setItem('token', 'supersecrettoken_for_user13')
        console.log('res.body:', res.body);
        this.setState();

         
        /* if (res.body) {
          window.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location/reload')
        } else { <NotFound /> } */

        
      })
  }

  

  isAuthenticated() {
    const token = localStorage.getItem('token');
    return token && token.length > 10;
  }

/*   handleClick() {
    if (token !==0) {
      window.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location/reload')
    } else { <NotFound /> }
  } */

  render() {
    return (
      <div>
         
        <form onSubmit={this.submitForm.bind(this)}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            autoFocus
            value={this.state.username}
            onChange={this.handleUsernameChanged.bind(this)}
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
            value={this.state.password}
            onChange={this.handlePasswordChanged.bind(this)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          /*  token={token}
           setToken={setToken}
           api={api}
           setApi={setApi} */
           /*onClick={handleClick} */
          > Sign In </Button >
        </form >


      </div>

    );
  }
}

