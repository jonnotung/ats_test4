import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import actionCreators from '../actions';

const CountryGender = (props) => {

    if(props.file) {
        console.log(props.file);
        props.genderBreakdown(props.file, props.selectedCountry);
    }

    return(
         <Fragment>
           { props.countryGender[0] || props.countryGender[1] ? 
                <Fragment>  
                    <h2>Gender breakdown for {props.selectedCountry}</h2>
                    <div className="genderRow">
                        <h3>{props.countryGender[0].gender} :</h3>
                        <h3>{props.countryGender[0].count * 100} %</h3>
                    </div>
                    <div className="genderRow">
                        <h3>{props.countryGender[1].gender} :</h3>
                        <h3>{props.countryGender[1].count * 100} %</h3>
                    </div>
                </Fragment>
                : "" }
        </Fragment >
        
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return({
        file: state.file,
        countryGender: state.countryGender,
        selectedCountry: state.selectCountry
    }); 
}

export default connect(mapStateToProps, {
    genderBreakdown: actionCreators.genderBreakdown,
})(CountryGender);