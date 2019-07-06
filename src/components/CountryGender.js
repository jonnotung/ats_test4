import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const CountryGender = (props) => {

}

const mapStateToProps = (state) => {
    return({
        countryGender: state.countryGender
    }); 
}

export default connect()(CountryGender);