import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import Popup from './Popup';
const Element = ({ elements }) => {
  const { symbol, category, name, number } = elements;
  const [showPopup, setPopup] = useState(false);

  const handleClick = () => {
    setPopup(!showPopup);
  };
  return (
    <Router>
      <div
        onClick={() => handleClick()}
        title={name}
        className={`element element-${number} ${category}`}
      >
        {' '}
        <Link to={name}>
          <div className='symbol'>{symbol}</div>
        </Link>
        {showPopup ? (
          <Route
            exact
            path='/:name'
            component={() => <Popup element={elements} />}
          />
        ) : (
          <Redirect to='/' />
        )}
      </div>
    </Router>
  );
};

export default Element;
