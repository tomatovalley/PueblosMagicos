import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Inicio"
           />
      <div class="container">
        <div class="card text-center mt-5">
          <div class="card-body">
            {/*<h1><span class="fa fa-lock"></span> Inicio de sesión o Registro</h1>*/}
            <br/>
            <a href="/login" class="btn btn-light">
              <span class="fa fa-user"></span> Inicio de sesión
            </a>
            <br/>
            <a href="/signup" class="btn btn-light">
              <span class="fa fa-user"></span> Registro
            </a>
          </div>
        </div>
      </div>
    </div>
             </MuiThemeProvider>
  </div>
    );
  }
}
