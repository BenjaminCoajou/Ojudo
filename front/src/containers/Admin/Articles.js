import { connect } from 'react-redux';
import articleTable from '../../components/Admin/Article/ArticleTable';

const mapStateToProps = (state) => ({
    list: state.articles.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(articleTable);