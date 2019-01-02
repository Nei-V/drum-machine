import React from 'react';

export const MyLocalContext = React.createContext("FIRST SET");

class LocalProvider extends React.Component {
    constructor(props) {
        super(props);

        this.changeSounds = () => {
            this.setState(state => {
                const newSet = state.soundSet === 'FIRST SET' ? 'SECOND SET' : 'FIRST SET';
                return {
                    soundSet: newSet
                };
            });
        };

        this.state = {
            soundSet: 'FIRST SET',
            changeSounds: this.changeSounds
        };
    }

    render () {
        return (
            <MyLocalContext.Provider value={this.state}>
            {this.props.children}
            {console.log("LocalProvider test")}
            </MyLocalContext.Provider>
        );
    }
}

export default LocalProvider;