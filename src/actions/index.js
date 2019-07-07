import countryUtils from '../utilities/countryUtils';

const actionCreators = {};

actionCreators.getFile = (file) => {
    return ({
        type: "LOAD_FILE",
        payload: file.data
    });
}

actionCreators.getCountryNames = (data) => {
    const countriesObj = countryUtils.isolateCountries(data.data);
    const nameArr = countryUtils.getCountryNames(countriesObj);

    return({
        type: "COUNTRY_NAMES",
        payload: nameArr
    });
}

actionCreators.selectCountry = (data) => {

    return({
        type: "SELECT_COUNTRY",
        payload: data
    });
}

actionCreators.countCountries = (data) => {
    const countriesObj = countryUtils.isolateCountries(data.data);
    const countriesArr = countryUtils.toArray(countriesObj);

    return ({
        type: "COUNT_COUNTRIES",
        payload: countriesArr
    });
}

actionCreators.countCarMakes = (data, selection) => {
    let fileInput = data;
    if(data.data) {
        fileInput = data.data;
    }
    const carsArr = countryUtils.isolateCarMake(fileInput, selection);

    return ({
        type: "CAR_MAKES",
        payload: carsArr
    });
}

actionCreators.getCountryDist = (data) => {
    const countriesObj = countryUtils.isolateCountries(data.data); 
    const dist = countryUtils.getDistribution(countriesObj);
    const distArr = countryUtils.toArray(dist);

    return ({
        type: "COUNTRY_DIST",
        payload: distArr
    });
}

actionCreators.genderBreakdown = (data, selection) => {
    let fileInput = data;
    if(data.data) {
        fileInput = data.data;
    }
    const gender = countryUtils.countGender(fileInput, selection);

    return ({
        type: "GENDER",
        payload: gender
    });
}

export default actionCreators;