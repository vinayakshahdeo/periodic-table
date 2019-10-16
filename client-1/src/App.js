import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Element from './components/Element';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { elements: [] };
  }
  componentDidMount() {
    const res = async () => {
      const result = await axios.get('/data');
      const data = result.data;
      this.setState({ elements: data });
    };
    res();
  }
  render() {
    return (
      <div className='wrapper'>
        <div id='table'>
          {this.state.elements.map(element => (
            <Element elements={element} key={element._id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
