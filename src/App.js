import React from 'react';
import {connect} from 'react-redux';

import FileInputComponent from './components/FileInputComponent';
import CountrySelect from './components/CountrySelect';
import CountryDist from './components/CountryDist';
import CountryGender from './components/CountryGender';
import CarMake from './components/CarMake';
import './App.css';

const App = (props) => {
  
 
    return (
      <div className="App">
        <header>
          <div className="outerWrapper">
            <div className="innerWrapper">
              <h1>Upload a comma separated .csv file from the csv folder</h1>
              <FileInputComponent />
            </div>
          </div>
        </header>

        { props.file.length > 0 ?
        <section className="distOuter">
          <div className="outerWrapper">
            <div className="innerWrapper">
              <CountryDist />
            </div>
          </div>
        </section> : ""
        }
        
        <section className="breakdownOuter">
          <div className="outerWrapper">
            <div className="innerWrapper">
              {props.file.length > 0 ?
                <div className="breakdown">
                  <CountrySelect />

                  <CountryGender />

                  <CarMake />
                  
                </div> 
                : "" 
              } 
            </div>
          </div>
        </section>

      </div>
    );
}



const mapStateToProps = (state) => {
  return({
      countryDist: state.countryDist,
      file: state.file
  });
}



export default connect(mapStateToProps)(App);
