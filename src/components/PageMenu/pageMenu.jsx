import React from 'react';
import {connect} from 'react-redux';
import nextPageActionCreator from '../../actions/nextPage';
import {Link} from 'react-router-dom';


class PageMenu extends React.Component {

    getStyles (currentPage, page) {
        if (currentPage === page) {
            return {
                color: 'red'
            }
        }

        return null;
    }

    render () {
        const {currentPage, nextPage} = this.props; // const currentPage = this.props.currentPage;   

        return (
            <ul>
                <li>
                    <Link 
                        to="/" 
                        onClick={() => nextPage('page-1')}>
                            <span style={this.getStyles(currentPage, 'page-1')}>
                                Page 1
                            </span> 
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/page-2" 
                        onClick={() => nextPage('page-2')}>
                            <span style={this.getStyles(currentPage, 'page-2')}>
                                Page 2
                            </span>
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/page-3"
                        onClick={() => nextPage('page-3')}>
                            <span style={this.getStyles(currentPage, 'page-3')}>
                                Page 3
                            </span>
                    </Link>
                </li>
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentPage: state.currentPage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        nextPage: (page) => dispatch(nextPageActionCreator(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageMenu)