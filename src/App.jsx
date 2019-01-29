import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Page1 from './pages/page-1';
import Page2 from './pages/page-2';
import Page3 from './pages/page-3';
import {Link} from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>

            <div className="app">
                <Header />
                <div id="body" className="app--body">
                    <div className="app--sidebar">
                        <ul>
                            <li>
                                <Link to="/">Page 1</Link>
                            </li>
                            <li>
                                <Link to="/page-2">Page 2</Link>
                            </li>
                            <li>
                                <Link to="/page-3">Page 3</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="app--content">
                        <Route exact path="/" component={Page1}/>
                        <Route path="/page-2" component={Page2}/>
                        <Route path="/page-3" component={Page3}/>
                    </div>
                </div>

                <div id="footer" className="app--footer">
                    Copyright @Simba
                </div>

            </div>
            </BrowserRouter>
        )
    }
}