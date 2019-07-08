import React, {Component} from 'react';
import { connect } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

import actionCreators from '../actions';

class CountryDist extends Component  {
 
    componentDidMount() {
        this.props.getCountCountries(this.props.file);
        this.props.getCountryNames(this.props.file);
        this.props.getDist(this.props.file);
    }

    render() {
        
        return (
            
                <div className="distribution">
                    <h2>Distribution of people from all countries present</h2>
                    <h3>Total people in file: {this.props.file.length}</h3>
                    <h3>Number of countries: {this.props.countryNames.length}</h3>
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
                            data={this.props.countryDist}
                            //data accessor for x values
                            x="name"
                            //data accessor for y values
                            y="count"
                        />
                    </VictoryChart>
                </div> 
                
            
        );

    }
}

const mapStateToProps = (state) => {
    return({
        countryDist: state.countryDist,
        countryNames: state.countryNames,
        file: state.file
    });
}

export default connect(mapStateToProps, {
    getDist: actionCreators.getCountryDist,
    getCountryNames: actionCreators.getCountryNames,
    getCountCountries: actionCreators.countCountries,
})(CountryDist);