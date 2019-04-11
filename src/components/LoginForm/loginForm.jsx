import React from 'react';
import './loginForm.scss';
import { connect } from 'react-redux';
import {compose} from 'redux';
import login from '../../actions/login';
import {withTranslation} from 'react-i18next';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            username: '',
            password: ''
        }
    }    

    login = (event) => {
        event.preventDefault();
        
        const {username, password} = this.state;

        if (username === 'admin' && password === 'admin') {
            this.props.login(username);
        }else {
            alert('Invalid user');
        }
    }

    onChangeUsername = (event) => {
        this.setState({username: event.target.value});
    }

    onChangePassword = (event) => {
        this.setState({password: event.target.value});
    }

    render() {

        return(
            <>                
            <h2>Login Form</h2>

            <form onSubmit={this.login}>
                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="uname">
                        <b>
                            { this.props.t('userName') }
                        </b>
                    </label>
                    <input type="text" placeholder="Enter Username" onChange={this.onChangeUsername} value={this.state.username} required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" onChange={this.onChangePassword} value={this.state.password} required />
                        
                    <button type="submit">Login</button>
                </div>
            </form>
            </>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username) => dispatch(login(username))
    }
}

//export default withTranslation('common')(connect(null, mapDispatchToProps)(LoginForm));
// compose(f(x), g(x)) === f(g(x))
export default compose(
    withTranslation('common'),
    connect(null, mapDispatchToProps)
)(LoginForm);
