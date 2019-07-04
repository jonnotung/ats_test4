import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const CountryDist = (props) => {

    return (
         !(props.countryDist.length === 0) ? 
            <Fragment>
                <h3>Distribution of people from different countries</h3>
                <VictoryChart width={1000} domainPadding={15}>
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
                        data={props.countryDist}
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
    return({
        countryDist: state.countryDist
    });
}

export default connect(mapStateToProps)(CountryDist);