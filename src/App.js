import React, { Component } from 'react';
import './App.css';
import Main from './view/containers/Main';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cart from './redux/cart/reducers'
import Nav from './view/components/Nav';

class App extends Component {
  store = createStore(cart)

  render() {
    return (
    <Provider store={this.store}>
      <Nav />
      <Main />
    </Provider>
    );
  }
}

export default App;
