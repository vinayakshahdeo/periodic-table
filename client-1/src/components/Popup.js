import React, { Component } from 'react';

class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <center>
          <div className={`popupInner ${this.props.element.category}`}>
            {Object.entries(this.props.element).map(([key, val]) => (
              <h2 key={key}>
                {key}: {val ? val : 'unknown'}
              </h2>
            ))}
          </div>
        </center>
      </div>
    );
  }
}

export default Popup;
