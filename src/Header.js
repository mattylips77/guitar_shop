import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div classname="main-nav">
        <div className="main-nav__tab">One</div>
        <div className="main-nav__tab">Two</div>
        <div className="main-nav__tab">Three</div>
        <div className="main-nav__search"></div>
      </div>
    );
  }
}

export default Header;
