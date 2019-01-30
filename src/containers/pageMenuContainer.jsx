import PageMenu from '../components/PageMenu/pageMenu';
import {connect} from 'react-redux';
import { currentPageSelector } from '../reducers/currentPage';
import nextPageActionCreator from '../actions/nextPage';

function mapStateToProps(state) {
    return {
        currentPage: currentPageSelector(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        nextPage: (page) => dispatch(nextPageActionCreator(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageMenu)