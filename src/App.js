import React, {Component} from 'react';

import FileInputComponent from './components/FileInputComponent';
import CountrySelect from './components/CountrySelect';
import CountryDist from './components/CountryDist';
import CountryGender from './components/CountryGender';
import CarMake from './components/CarMake';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App outerWrapper">
        <div className="innerWrapper">
          <h1>Upload a comma separated .csv file</h1>
          
          <FileInputComponent />

          <CountryDist />

          <div className="breakdown">
            <CountrySelect />

            <CountryGender />

            <CarMake />

          </div>
        </div>
      </div>
    );
  }

}

export default App;
