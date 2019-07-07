import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import actionCreators from '../actions/';

const CountrySelect = (props) => {

    //wrapper function to dispatch actions to update selection, gender breakdown and car makes on selection change
    const handleChange = (e) => {
        props.selectCountry(e);
        props.genderBreakdown(props.file, e);
        props.countCarMakes(props.file, e);
    }

    return (
        props.file ? 
        <Fragment>
            <select onChange={ e => handleChange(e.target.value) }>
                <option value="all countries">All countries</option>
                {
                    props.countryNames.map((name, id) => {
                        return(
                            <option key={id} value={name}>{name}</option>
                        )
                    })
                }
            </select>
        </Fragment> : ""
    );
}



const mapStateToProps = (state) => {
    return({
        countryNames: state.countryNames,
        file: state.file,
        selectedCountry: state.selectCountry,
    });
}

export default connect(mapStateToProps, {
    selectCountry: actionCreators.selectCountry,
    genderBreakdown: actionCreators.genderBreakdown,
    countCarMakes: actionCreators.countCarMakes, 

})(CountrySelect);