import React from 'react';
import { connect } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const CountryDist = (props) => {

    return (
         !(props.countryDist.length === 0) ? 
            <div className="distribution">
                <h3>Distribution of people from all countries present</h3>
                <VictoryChart 
                    
                    height={500}
                    domainPadding={15}
                    theme={VictoryTheme.material}
                >
                    <VictoryAxis
                        label="Number of people"
                        style={{ axisLabel: { padding: 30 } }}
                    />
                    <VictoryAxis
                        dependentAxis
                        label="Number of countries"
                        style={{ axisLabel: { padding: 30 } }}
                    />
                    <VictoryBar
                        horizontal
                        data={props.countryDist}
                        //data accessor for x values
                        x="name"
                        //data accessor for y values
                        y="count"
                    />
                </VictoryChart>
            </div> : ""
        
    );
}

const mapStateToProps = (state) => {
    
    return({
        countryDist: state.countryDist
    });
}

export default connect(mapStateToProps)(CountryDist);