import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
        <Link to="panel">Iniciar sesión</Link>
      </div>
    );
  }
}

export default Login;
