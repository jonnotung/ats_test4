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
      <div className="App outerWrapper">
        <div className="innerWrapper">
          <h1>Upload a comma separated .csv file</h1>
          
          <FileInputComponent />

          <CountryDist />

         {props.countryDist.length > 0 ?
            <div className="breakdown">
              <CountrySelect />

              <CountryGender />

              <CarMake />

            </div> : ""
         }
        </div>
      </div>
    );
}



const mapStateToProps = (state) => {
  return({
      countryDist: state.countryDist
  });
}



export default connect(mapStateToProps)(App);
