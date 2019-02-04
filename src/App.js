import React, { Component } from 'react';
import './App.css';
import Header from './view/containers/Header'
import Main from './view/containers/Main'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cart from './redux/cart/reducers'

class App extends Component {
  store = createStore(cart)

  render() {
    return (
    <Provider store={this.store}>
      <Header />
      <Main />
    </Provider>
    );
  }
}

export default App;
