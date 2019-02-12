import React, { Component } from 'react';

const Head = {
  width: "100%",
  backgroundColor: "#2F89FC",
  minHeight: "50px",
  textAlign: "center",
  padding: "8px",
  display: "flex",
  justifyContent:"flex-end",
  alignItems:"center"
}

const oneinput ={
  border:"1px solid RGBA(0,0,0,.3)",
  borderRadius: "5px",
  padding: "2px",
 }

const Card = {
    background: "white",
    height: "600px",
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
    boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"
}

const Card2 = {
    background: "white",
    height: "700px",
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
    boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"
}

const Container = {
  width: "100%",
  height: "calc( 100vh - 50px)",
}


var imageName = require('./loc.jpg')
var estre = require('./1f31f.png')

class App extends Component {

  constructor() {
          super();
          this.state = {
            placeholder:'Nombre'
          };
        }

  render() {
    return (

      <div className="App">

        <div style={Head}>

                <form className="text-right search" method="GET">
                    <input style={oneinput} name="q" placeholder="Buscar" type="text"/>
                </form>
        </div>

        <div style={Container}>
          <div style={Card}>
            <img src={imageName} alt="loc" width="200" height="180" />
            <br /><br />
            <label>Local</label>
            <br /><br />
            <label>Descripcion</label>
            <br /><br />
            <div class="stars">
              5 <img draggable="false" class="emoji" alt="s" src={estre}/>
            </div>
          </div>
          <div style={Card2}>

            <label>Posts</label>
          </div>
        </div>
      </div>

    );

  }
}

export default App;
