// Higher Order Components (HDC) - A components that renders another component
// Reuse code
// Render Hijacking
// Abstract state

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> The info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent  {...props}/>
            ) : (
                <p>Please login to view the info</p>
            )}
        </div>);
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

ReactDom.render(<AuthInfo isAuthenticated={true} info="There are the details"/>, document.getElementById('app'));