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
      <div className="container">
        <div className="card text-center mt-5">
          <div className="card-body">
            {/*<h1><span className="fa fa-lock"></span> Inicio de sesión o Registro</h1>*/}
            <br/>
            <a href="/login" className="btn btn-light">
              <span className="fa fa-user"></span> Inicio de sesión
            </a>
            <br/>
            <a href="/signup" className="btn btn-light">
              <span className="fa fa-user"></span> Registro
            </a>
            <br/>
            {/*
            <a href="/test" className="btn btn-light">
              <span className="fa fa-user"></span> Test
            </a>
            */}
          </div>
        </div>
      </div>
    </div>
             </MuiThemeProvider>
  </div>
    );
  }
}
