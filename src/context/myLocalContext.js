import React from 'react';

export const MyLocalContext = React.createContext("set1");

class LocalProvider extends React.Component {
    constructor(props) {
        super(props);

        this.changeSounds = () => {
            this.setState(state => {
                const newSet = state.soundSet === 'set1' ? 'set2' : 'set1';
                return {
                    soundSet: newSet
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
            <MyLocalContext.Provider value={this.state}>
            {this.props.childern}
            {console.log("LocalProvider test")}
            </MyLocalContext.Provider>
        );
    }
}

export default LocalProvider;