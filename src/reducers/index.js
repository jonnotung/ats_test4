import {combineReducers} from 'redux';

const getFile = (file=null, action) => {
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

const countryDist = (data=[], action) => {
    if (action.type === "COUNTRY_DIST") {
        return action.payload;
    }
    return data;
}

export default combineReducers({
    file: getFile,
    countCountries: countCountries,
    countryDist: countryDist,
});