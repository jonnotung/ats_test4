import React, {Component} from 'react';

import FileInputComponent from './components/FileInputComponent';
import countryUtils from './utilities/countryUtils';
// import actions from './actions';
import CountryDist from './components/CountryDist';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      data: [],
      countryCount: [],
      topTen: [],
      bottomTen: [],
      dist: [],
    };
  }

  getFile = (file) => {
    this.setState({
      data: file.data
    }, () => {this.countCountries()} );
  }

  countCountries = () => {
    const countriesObj = countryUtils.isolateCountries(this.state.data); 
    
    const countriesArr = countryUtils.toArray(countriesObj);
    const dist = countryUtils.getDistribution(countriesObj);
    const distArr = countryUtils.toArray(dist);
    const [topTen, bottomTen] = countryUtils.getTen(countriesArr);

    distArr.sort((a, b) => {
      return b.count - a.count;
    })

    this.setState({
      countryCount: countriesArr,
      topTen: topTen,
      bottomTen: bottomTen,
      dist: distArr
    })
  }

  

  render() {
    return (
      <div className="App outerWrapper">
        <div className="innerWrapper">
          <h1>Upload a comma separated .csv file</h1>
          
          <FileInputComponent 
            getFile = {this.getFile}
          />
        
          <CountryDist countryDist={this.state.dist}/>
          
           
        </div>
      </div>
    );
  }

}

export default App;
