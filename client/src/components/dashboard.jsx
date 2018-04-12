import React from 'react';
import { connect } from 'react-redux';

import { requestSpotify } from '../core/app/actions'

class Dashboard extends React.Component {
    handleClick = () => {
        console.log("yall been clicked")
        this.props.requestSpotify();
    }
    render() {
        return (
            <div>
                Some Shit
                <button onClick={this.handleClick}>
                    Click Me!
                </button>
            </div>
        )
    }
}



export default connect(null, { requestSpotify })(Dashboard)