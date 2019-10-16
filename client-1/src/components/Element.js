import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import Popup from './Popup';
class Element extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  handleClick = () => {
    console.log(this.state.showPopup)
    this.setState({ showPopup: !this.state.showPopup });
    console.log(this.state.showPopup)
  };
  someFunction(name) {
    if (window.location.pathname !== '/') {
      const name = window.location.pathname.substr(1);
      console.log(name);
      if (this.props.elements.name === name) {
        return this.props.elements;
      }
      return false;
    } else {
      return false;
    }
  }
  render() {
    return (
      <Router>
        <div
          onClick={this.handleClick}
          title={this.props.elements.name}
          className={`element element-${this.props.elements.number} ${this.props.elements.category}`}
        >
          {' '}
          <Link to={this.props.elements.name}>
            <div className='symbol'>{this.props.elements.symbol}</div>
          </Link>
          {!this.state.showPopup && this.someFunction(this.props.elements) ? (
            <Route
              exact
              path={`/:${this.props.elements.name}`}
              render={props => (
                <Popup
                  element={
                    this.someFunction(this.props.elements)
                      ? this.someFunction(this.props.elements)
                      : this.props.elements
                  }
                />
              )}
            />
          ) : (
            <Redirect to='/' />
          )}
        </div>
      </Router>
    );
  }
}

export default Element;
