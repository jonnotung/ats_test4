import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

import actionCreators from '../actions';

class CarMake extends Component {

    componentDidMount() {
        this.props.countCarMakes(this.props.file, this.props.selectedCountry);
    }

    render() {
        return (
            !(this.props.carMake.length === 0) ?
                <Fragment>
                    <h2>Top 10 car brands for {this.props.selectedCountry}</h2>
                    <VictoryChart 
                        width={950} 
                        // domainPadding={45}
                        theme={VictoryTheme.material}
                        domainPadding={60}
                    >
                        <VictoryAxis
                            label=""
                            style={{ axisLabel: { padding: 30 } }}
                        />
                        <VictoryAxis
                            dependentAxis
                            label="Number of owners"
                            style={{ axisLabel: { padding: 30 } }}
                        />
                        <VictoryBar
                            
                            padding={ 60}
                            data={this.props.carMake}
                            //data accessor for x values
                            x="name"
                            //data accessor for y values
                            y="count"
                        />
                    </VictoryChart>
                </Fragment> : ""
        );
    }
}

const mapStateToProps = (state) => {
    
    return ({
        carMake: state.carMakes,
        selectedCountry: state.selectCountry,
        file: state.file
    });
    
}

export default connect(mapStateToProps, {
    countCarMakes: actionCreators.countCarMakes,
})(CarMake);