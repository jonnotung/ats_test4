import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';

import actionCreators from '../actions';

const CountryGender = (props) => {

    
        return(
             <Fragment>
               { props.countryGender[0] || props.countryGender[1] ? 
                    <Fragment>  
                        <h2>People from {props.selectedCountry} in dataset: </h2>
                        <h3 className="totalPeople">Total people: {props.countryGender[2]}</h3>
                        <div className="genderRow">
                            <h3>{props.countryGender[0].gender} :</h3>
                            <h3>{ (props.countryGender[0].count * 100).toFixed(2) } %</h3>
                        </div>
                        <div className="genderRow">
                            <h3>{props.countryGender[1].gender} :</h3>
                            <h3>{ (props.countryGender[1].count * 100).toFixed(2) } %</h3>
                        </div>
                    </Fragment>
                     : "" } 
            </Fragment >
            
        );
    }


const mapStateToProps = (state) => {
    return({
        countryGender: state.countryGender,
        selectedCountry: state.selectCountry
    }); 
}

export default connect(mapStateToProps)(CountryGender);