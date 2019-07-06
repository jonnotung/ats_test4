import React from 'react';
import Papaparse from 'papaparse';
import {connect} from 'react-redux';

import actionCreators from '../actions/';

const FileInputComponent = (props) => {
    let fileReader;

    const handleFileRead = (event) => {
        const content = fileReader.result;
        const parsedFile = Papaparse.parse(content, {header: true});
        props.getFile(parsedFile);
        props.countCountries(parsedFile);
        props.countryNames(parsedFile);
        props.countryDist(parsedFile);
        props.countryGender(parsedFile);
        props.countCarMakes(parsedFile);
    }

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    }
    
    return (
        <div className="fileInputWrap">
            <label htmlFor="file" className="loadLabel">Load .csv file</label>
            <input 
                type="file"
                id="file"
                className="fileInput visuallyHidden"
                accept=".csv"
                onChange={ (event) => handleFileChosen(event.target.files[0]) }
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {};
}

//FileInputComponent doesn't display anything from state
export default connect(mapStateToProps, {
    getFile: actionCreators.getFile,
    countCountries: actionCreators.countCountries,
    countryNames: actionCreators.getCountryNames,
    countryDist: actionCreators.getCountryDist,
    countryGender: actionCreators.genderBreakdown,
    countCarMakes: actionCreators.countCarMakes,
})(FileInputComponent);