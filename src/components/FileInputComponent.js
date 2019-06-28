import React from 'react';
import Papaparse from 'papaparse';

const FileInputComponent = props => {
    let fileReader;

    const handleFileRead = (event) => {
        const content = fileReader.result;
        props.getFile( Papaparse.parse(content, {header: true}) );

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

export default FileInputComponent;