import React, { Component } from 'react';
import Head from './global/Head'

const Card = {
    background: "white",
    height: "400px",
    width: "300px",
    position: "fixed",
    top: "10vh",
    left:"4vw",
    display: "block",
    margin: "0 auto",
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "center",
    padding: "40px",
    borderRadius:"5px",
    boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
}

const Card2 = {
    background: "white",
    height: "560px",
    width: "750px",
    position: "fixed",
    top: "10vh",
    left:"35vw",
    display: "block",
    margin: "0 auto",
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "left",
    padding: "40px",
    borderRadius:"5px",
    boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
    overflowY: 'auto'
}

const Container = {
  width: "100%",
  height: "calc( 100vh - 50px)",
}


var imageName = require('./avatar2.png')

class Profile extends Component {

  constructor() {
          super();
          this.state = {
            placeholder:'Nombre'
          };
        }

  render() {
    return (

      <div className="App">

        <header>
          <Head/>
        </header>

        <div style={Container}>
          <div style={Card}>
            <img src={imageName} alt="avatar2" width="100" height="100" />
            <br /><br />
            <label>Usuario</label>
          </div>
          <div style={Card2}>
            <label>Posts</label>
          </div>

        </div>


      </div>

    );

  }
}

export default Profile;