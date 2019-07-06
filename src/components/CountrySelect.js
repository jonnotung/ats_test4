import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import actionCreators from '../actions/';

const CountrySelect = (props) => {
    return (
        <Fragment>
            <select onChange={props.selectCountry}>
                <option value="all countries">All countries</option>
                {
                    props.countryNames.map((name, id) => {
                        return(
                            <option key={id} value={name}>{name}</option>
                        )
                    })
                }
            </select>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return({
        countryNames: state.countryNames
    });
}

export default connect(mapStateToProps, {
    selectCountry: actionCreators.selectCountry
})(CountrySelect);