import { connect } from 'react-redux';
import AddArticle from '../../components/Admin/Article/AddArticle';
import { inputChange, submitArticle } from '../../actions/Admin/articles';

const mapStateToProps = (state) => ({
    title: state.articles.newArticle.title,
    content: state.articles.newArticle.content,
});

const mapDispatchToProps = (dispatch) => ({
    inputChange: (payload) => {
        dispatch(inputChange(payload));
    },
    handleSubmit: () => {
        dispatch(submitArticle());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);