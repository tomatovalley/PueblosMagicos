import React, { Component } from 'react';


const Head = {
  width: "100%",
  backgroundColor: "#2F89FC",
  minHeight: "50px",
  textAlign: "left",
  padding: "10px",
  display: "flex",
  alignItems:"left",
  color: "white",
}

 const btn ={
   all: "unset",
   backgroundColor: "#2f89fc",
   padding: "8px 20px",
   borderRadius: "5px",
   color: "white",
  }

  var logo = require('../avatar2.png')
  var pm = require('./pm.png')

class Hd extends Component {

  constructor() {
          super();
          this.state = {

          };
        }

render() {
  return (

    <div className="App">

      <div style={Head}>
        <img src={logo} alt="avatar2" width="25" height="25" />
          <img src={pm} alt="avatar2" height="25" />
          <button style={btn}> </button>
          <a href="/feed"><font color="FFFFFF">Muro</font></a>
          <button style={btn}> </button>
          <a href="/profile"><font color="FFFFFF">Perfil</font></a>
          <button style={btn}> </button>
            <div className="w3-dropdown-hover">
             <button className="w3-button" style={{height: "22px", width: "200px", paddingTop: "0vw",   backgroundColor: "#FFFFFF", color: "black", textAlign:"left"}} >Descubre un pueblo  ▼</button>
             <div className="w3-dropdown-content w3-bar-block w3-border">
               <a href="/tecate" className="w3-bar-item w3-button" style={{width: "198px"}}>Tecate</a>
             </div>
           </div>
           <button style={{all: "unset", backgroundColor: "#2f89fc", padding: "8px 20px", borderRadius: "5px", color: "white", width: "580px"}}> </button>
           <a href="/"><font color="FFFFFF">Cerrar Sesión</font></a>
      </div>


    </div>

  );

}
}

export default Hd;