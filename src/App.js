import React, {Component} from 'react';

import FileInputComponent from './components/FileInputComponent';
// import actions from './actions';
import CountryDist from './components/CountryDist';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App outerWrapper">
        <div className="innerWrapper">
          <h1>Upload a comma separated .csv file</h1>
          
          <FileInputComponent />
        
          <CountryDist />

        </div>
      </div>
    );
  }

}

export default App;
