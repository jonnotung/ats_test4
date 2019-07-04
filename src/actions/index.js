import countryUtils from '../utilities/countryUtils';

const actionCreators = {};

actionCreators.getFile = (file) => {
    return ({
        type: "LOAD_FILE",
        payload: file.data
    });
}

actionCreators.countCountries = (data) => {
    const countriesObj = countryUtils.isolateCountries(this.state.data);
    const countriesArr = countryUtils.toArray(countriesObj);

    return ({
        type: "COUNT_COUNTRIES",
        payload: countriesArr
    });
}

actionCreators.getCountryDist = (data) => {
    const countriesObj = countryUtils.isolateCountries(this.state.data); 
    const dist = countryUtils.getDistribution(countriesObj);
    const distArr = countryUtils.toArray(dist);

    return ({
        type: "COUNTRY_DIST",
        payload: distArr
    });
}

export default actionCreators;