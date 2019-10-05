import React from 'react';

const Popup = ({ element }) => {
  console.log(element);
  const { category } = element;
  return (
    <div className='popup'>
      <center>
        <div className={`popupInner ${category}`}>
          {Object.entries(element).map(([key, val]) => (
            <h2 key={key}>
              {key}: {val ? val : 'unknown'}
            </h2>
          ))}
        </div>
      </center>
    </div>
  );
};

export default Popup;
