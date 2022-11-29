import React from 'react';
import logo from '../../../images/face1.jpg';

function MyProfileDescriptionComponent(props) {
    return (
        <div>
            <div className="logo-profile">
                <img alt="logo" src={logo} />
            </div>
            <div className="descr-profile">
                <h1>Joanna</h1>
            </div>
            <div className="break"></div>
        </div>
    );
}

export default MyProfileDescriptionComponent;