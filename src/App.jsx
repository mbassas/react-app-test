import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Page1 from './pages/page-1';
import Page2 from './pages/page-2';
import Page3 from './pages/page-3';
import Header from './components/Header/Header';
import './App.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import PageMenu from './components/PageMenu/pageMenu';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = createStore(reducers);
    }
    render() {
        return (
            <Provider store = {this.store}>
                <BrowserRouter>
                    <div className="app">
                        <Header />
                        <div id="body" className="app--body">
                            <div className="app--sidebar">
                                <PageMenu />
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

            </Provider>
        )
    }
}