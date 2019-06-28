import React, {Component, Fragment} from 'react';

import FileInputComponent from './components/FileInputComponent';
import isolateCategories from './utilities/isolateCategories';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  getFile = (file) => {
    this.setState({
      data: file.data
    }, () => {isolateCategories.isolateCountries(this.state.data)} );
  }

  render() {
    return (
      <div className="App outerWrapper">
        <div className="innerWrapper">
          <h1>Upload a comma separated .csv file</h1>
          <FileInputComponent 
            getFile = {this.getFile}
          />
          { this.state.data.map( (row) => {
            return (
              <p>{row.First_name} {row.Last_name}</p>
            )
          } ) }
           
        </div>
      </div>
    );
  }

}

export default App;
