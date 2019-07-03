import React, {Component, Fragment} from 'react';
import {VictoryBar, VictoryScatter, VictoryLabel, VictoryChart, VictoryAxis, VictoryZoomContainer} from 'victory';

import FileInputComponent from './components/FileInputComponent';
import countryUtils from './utilities/countryUtils';
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
    
    const countriesArr = countryUtils.toCountriesArray(countriesObj);
    const dist = countryUtils.getDistribution(countriesObj);
    const distArr = countryUtils.toCountriesArray(dist);
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
        
          {
            this.state.dist.length > 0 ?  
              <Fragment>
                <h3>Distribution of people from different countries</h3>
                <VictoryChart width={1000} domainPadding={15}>
                  <VictoryAxis 
                    label="Number of people"
                    style={{axisLabel: {padding: 30}}}
                  />
                  <VictoryAxis 
                    dependentAxis
                    label="Number of countries"
                    style={{axisLabel: {padding: 40}}}
                  />
                  <VictoryBar
                    data={this.state.dist}
                    //data accessor for x values
                    x="name"
                    //data accessor for y values
                    y="count"
                  /> 
                </VictoryChart>
              </Fragment>
            : ""
          }
          
           
        </div>
      </div>
    );
  }

}

export default App;
