import React from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm/loginForm';
import { currentUserSelector } from '../reducers/currentUser';

function withLogin (MyComponent) {
    const mapStateToProps = (state) => ({
        currentUser: currentUserSelector(state)
    });
    
    return connect(mapStateToProps)(function (props) {
        if (props.currentUser) {
            return (
                <MyComponent {...props} />
            );   
        }

        return <LoginForm />;
    });
}

export default withLogin;