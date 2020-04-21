import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

const AddArticle = ({title, content, inputChange, handleSubmit}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <form onSubmit={(evt) => { evt.preventDefault(); handleSubmit() }}>
                <div className={`${classes.container} form-group`}>
                    <label htmlFor="InputTitle">Titre</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="InputTitle" 
                    name="title"
                    value={title}
                    onChange={(evt) => {inputChange({ [evt.target.name]: evt.target.value})}}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="inputContent">Contenu</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputContent"
                    name="content"
                    value={content}
                    onChange={(evt) => {inputChange({ [evt.target.name]: evt.target.value})}}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddArticle.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    inputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default AddArticle;