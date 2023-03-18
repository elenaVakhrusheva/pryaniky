import React from 'react';
// import Api from './utils/api.js'

export default function Dashboard(props) {
  //const user = getUser();

  const handleLogout = () => {
    props.history.push('/login');
  }

  return (
    <div>
      Welcome User!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}