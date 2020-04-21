import { connect } from 'react-redux';
import articleTable from '../../components/Admin/Article/ArticleTable';
import { deleteArticle, deleteArticleSubmit} from '../../actions/Admin/articles';

const mapStateToProps = (state) => ({
    list: state.articles.list,
});

const mapDispatchToProps = (dispatch) => ({
    deleteArticle: (payload) => {
        dispatch(deleteArticle(payload));
    },
    submitDelete: () => {
        dispatch(deleteArticleSubmit());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(articleTable);