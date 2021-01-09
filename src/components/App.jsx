import React, { Component } from 'react';
import Header from './Header.jsx'
import Main from './Main';
class App extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <Header />
        <Main/>
      </div>
    );
  }
}

export default App;