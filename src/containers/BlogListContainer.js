import { connect } from 'react-redux';
import BlogList from '../components/BlogList';

// translate redux state into react props
const mapStateToProps = (state) => {
    return {
        // react-props: redux-state
        posts: state.posts
    }
};

// translate redux action-dispatch into react props

const makeBlogListSmart = connect(mapStateToProps);
const SmartBlogList = makeBlogListSmart(BlogList);

export default SmartBlogList;