import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import PropTypes from 'prop-types';

//import { login } from './actions';
import Background from './portada4.jpg';


var sectionStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  display: "flex",
  justifyContent:"center",
  alignItems: "center"
 };

 const TodoComponent = {
   borderRadius:"5px",
   width: "400px",
   backgroundColor: "white",
   minHeight: "250px",
   boxSizing: "border-box",
   textAlign: "center",
   display: "flex",
   flexDirection:"column",
   justifyContent:"center",
   alignItems: "center"
 }
 const formInput = {
   width:"70%",
   borderRadius: "5px",
   border:"1px solid RGBA(0,0,0,.3)",
   padding: "10px",
   marginTop:"10px",
   marginBottom:"10px",
 }
 const Header = {
   padding: "10px 20px",
   textAlign: "center",
   color: "black",
   fontSize: "50px",
 }

 const btn ={
   all: "unset",
   backgroundColor: "#2f89fc",
   padding: "8px 20px",
   borderRadius: "5px",
   color: "white",
   textTransform: "uppercase",
   boxShadow: "0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)",
 }

class Login extends Component  {

  constructor(props){
      super(props);
      this.state = {
        username:'',
        password:'',
        user:[]
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInfoChange = this.handleInfoChange.bind(this);
      this.aaaaa();
    }

    aaaaa () {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))
    }

    handleInfoChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      const data = this.state;

      fetch('/auth/login', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error))
      //console.log(this.props);
   }

// this.setState({user: data})
   

  render() {
    return (
      <section style={ sectionStyle }>
      <div class="App">

      <form onSubmit={this.handleSubmit}>
        <form action="action_page.php">
          <div className="imgcontainer" >
            <label> </label>
          </div>

          <div style={TodoComponent}>
            <h2 style={Header}>Inicia Sesión</h2>
            <input style={formInput}
            type="text" 
            name="username" 
            placeholder="Username" 
            value={this.state.email} 
            onChange={this.handleInfoChange} />
            <br/>
            <br/>
            <input style={formInput}
            type="password" 
            name="password" 
            placeholder="Password" 
            value={this.state.password} 
            onChange={this.handleInfoChange}/>
            <br/>
            <br/>
            <button style = {btn} type="submit">Iniciar</button>
            <br/>
            <label>
              <input type="checkbox" checked="checked" name="remember"/> Recordarme
            </label>
            <br/>
            <span className="psw"><a href="/">¿Olvidaste tu contraseña?</a></span>
            <br/>
              <p>¿No tienes una cuenta? <a href="/signup">Regístrate</a></p>
          </div>

        </form>
      </form>

      </div>
      </section>

    );
  }
}


/*const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
        login
    }, dispatch,
  );
}*/

export default Login;

