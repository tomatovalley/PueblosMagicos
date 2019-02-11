import React, { Component } from 'react';

class Home extends Component {
    state = {
        response: ''
      };
      
      callApi = async () => {
        fetch('/')
        .then((res)=>{ res.text() })
        .then(res => this.setState({ response: res }))
      };

      render() {
        return(
            <p>{this.state.response}</p>
        );
      }
}

export default Home;