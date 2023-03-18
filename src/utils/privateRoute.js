import React from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
//import { getToken } from './utils/common';
 
// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {

  const user = {username: 'user13', password: 'password'}

  return (
   /*  <Route
      {...rest}
      render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    /> */
     <div>
      {user && <Navigate to="/dashboard" />}
    </div>
  )
}
 
export default PrivateRoute;