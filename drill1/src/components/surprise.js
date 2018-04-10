import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: false
        }

    }

    changeState() {
        console.log(this.state);
        if (this.state.image === true) {
            this.setState({
                image: false
            })
        } else {
            this.setState({
                image: true
            })
        }
    }

    render() {
        
        if (this.state.image === true) {
            console.log(this.state)
            return <SurpriseImage />
        } else {
            return <button onClick={event => {
                this.changeState()
            }}>Surprise!</button>;;
        }
    }
}
