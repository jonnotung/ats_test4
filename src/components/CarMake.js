import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

import countryUtils from '../utilities/countryUtils';

const CarMake = (props) => {
   

    return (
        !(props.carMake.length === 0) ?
            <Fragment>
                <h3>Top 10 car brands for all countries</h3>
                <VictoryChart 
                    width={900} 
                    domainPadding={45}
                    theme={VictoryTheme.material}
                >
                    <VictoryAxis
                        label="Car brands"
                        style={{ axisLabel: { padding: 30 } }}
                    />
                    <VictoryAxis
                        dependentAxis
                        label="Number of owners"
                        style={{ axisLabel: { padding: 30 } }}
                    />
                    <VictoryBar
                        padding={ 60}
                        data={props.carMake}
                        //data accessor for x values
                        x="name"
                        //data accessor for y values
                        y="count"
                    />
                </VictoryChart>
            </Fragment> : ""

    );
}

const mapStateToProps = (state) => {
    
    return ({
        carMake: state.carMakes,
        selectedCountry: state.selectCountry
    });
    
}

export default connect(mapStateToProps)(CarMake);