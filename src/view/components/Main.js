import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          Cat{' '}
          <button>Add to cart</button>
        </div>
        <br />
        <div>
          Dog{' '}
          <button>Add to cart</button>
        </div>
        <br />
        <div>
          Chicken{' '}
          <button>Add to cart</button>
        </div>
        <br />
        <div>
          Cow{' '}
          <button>Add to cart</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;