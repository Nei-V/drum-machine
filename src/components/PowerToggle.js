import React, { Component } from 'react';
import { connect } from 'react-redux';
import { powerFunc } from '../actions/actionPower';

class PowerToggle extends Component {
    constructor(props) {
        super(props);
        this.handleClickPower = this.handleClickPower.bind(this);
        this.state = { onOff: true };
        console.log("props in powerToggle", props);
    }

    handleClickPower(e) {
        console.log("previous state in handleClickPower", this.state.onOff);
        console.log("props in handleClickPower", this.props);
        this.setState(previousState => ({ onOff: !previousState.onOff }));
        console.log("afterclick in handleClickPower", this.state);
        this.props.playerOn(this.state.onOff);

    }
    render() {
        return (
            <label id="powerToggle" className="powerContainer">Power
            <div className="toggle">
                    <input className="toggle-state" type="checkbox" id="powerToggleButton" onClick={this.handleClickPower} value="checked" />
                    <div className="toggle-inner">
                        <div className="indicator"></div>
                    </div>
                    <div className="active-bg"></div>
                </div>
            </label>
        )
    }
}

const mapStateToProps = (state) => {
    return { storedState: state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        playerOn: (onOff) => {
            console.log("power in mapDispatch : ", onOff);
            dispatch(powerFunc(onOff));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PowerToggle);