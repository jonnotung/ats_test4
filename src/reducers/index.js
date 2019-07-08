import {combineReducers} from 'redux';

const file = (file=[], action) => {
    if (action.type === "LOAD_FILE") {
        return action.payload;
    }
    return file;
}

const countCountries = (data=[], action) => {
    if (action.type === "COUNT_COUNTRIES") {
        return action.payload;
    }
    return data;
}

const getCountryNames = (data=[], action) => {
    if(action.type === "COUNTRY_NAMES") {
        return action.payload;
    }
    return data;
}

const selectCountry = (data="all countries", action) => {
    if(action.type==="SELECT_COUNTRY") {
        return action.payload;
    }
    return data;
}

const countryDist = (data=[], action) => {
    if (action.type === "COUNTRY_DIST") {
        return action.payload;
    }
    return data;
}

const countryGender = (data=[], action) => {
    if (action.type === "GENDER") {
        return action.payload;
    }

    return data;
}

const carMakes = (data=[], action) => {
    if(action.type === "CAR_MAKES") {
        return action.payload;
    }
    return data;
}

export default combineReducers({
    file: file,
    countCountries: countCountries,
    countryNames: getCountryNames,
    selectCountry: selectCountry,
    countryDist: countryDist,
    countryGender: countryGender,
    carMakes: carMakes,
});