import React from 'react';
import './App.scss';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div id="header" className="app--header">
                        header
                </div>

                <div id="body" className="app--body">
                    <div className="app--sidebar">
                        <ul>
                            <li>
                                <a href="">Page 1</a>
                            </li>
                            <li>
                                <a href="">Page 2</a>
                            </li>
                            <li>
                                <a href="">Page 3</a>
                            </li>
                        </ul>
                    </div>
                    <div className="app--content">
                        body
                    </div>
                </div>

                <div id="footer" className="app--footer">
                    Copyright @Simba
                </div>

            </div>
        )
    }
}