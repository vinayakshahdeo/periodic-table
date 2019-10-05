import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Element from './components/Element';
function App() {
  // const context = React.createContext();
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const res = async () => {
      const result = await axios.get('/data');
      const data = result.data;
      setElements(elements => [...elements, ...data]);
    };
    res();
  }, []);
  // console.log(elements.map(element => console.log(element)));
  return (
    <div className='wrapper'>
      <div id='table'>
        {elements.map(element => (
          <Element elements={element} key={element._id} />
        ))}
      </div>
    </div>
  );
}

export default App;
