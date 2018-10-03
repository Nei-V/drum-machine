import React from 'react';

export const myLocalContext = React.createContext("set1");

class localProvider extends React.Component {
    constructor(props) {
        super(props);

        this.changeSounds = () => {
            this.setState(state => {
                const newSet = state.soundSet === 'set1' ? 'set2' : 'set1';
                return {
                    sounsSet: newSet
                };
            });
        };

        this.state = {
            soundSet: 'set1',
            changeSounds: this.changeSounds
        };
    }

    render () {
        return (
            <myLocalContext.Provider value={this.state}>
            {this.props.childern}
            </myLocalContext.Provider>
        );
    }
}

export default localProvider;