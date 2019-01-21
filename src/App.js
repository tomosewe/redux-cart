import React, { Component } from 'react';
import './App.css';
import Main from './view/components/Main';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav-wrapper">
          <div className="nav">
            <h1>ReduxCart</h1>
            <p>Cart</p>
          </div>
        </div>
        <div className="main">
          <Main />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
