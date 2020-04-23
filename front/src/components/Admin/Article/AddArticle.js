import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import './style.scss'; 

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& .MuiTextField-root': {
            margin: theme.spacing(4),
            width: '25ch',
            background: 'white',
        },
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

const AddArticle = ({ title, content, inputChange, handleSubmit }) => {
    const classes = useStyles();

    return (
        <form className="form_article" onSubmit={(evt) => { evt.preventDefault(); handleSubmit() }}>
            <input name="title" placeholder="Entrer un titre" className="input_title" value={title} onChange={(evt) => {inputChange({ [evt.target.name]: evt.target.value})}} required /> 
            <textarea rows="4" cols="50" name="content" placeholder="Entrer votre contenu" className="message" value={content}
                    onChange={(evt) => {inputChange({ [evt.target.name]: evt.target.value})}} required></textarea>

            <div class="button-wrapper">
                <span class="label">
                    ajouter une image
                </span>

                <input type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File" accept="image/png, image/jpeg"/>
  
            </div>
            <button type="submit"
                     className="btn btn-primary" 
                     onClick={(evt) => { evt.preventDefault(); handleSubmit() }}>
                        <Link to="/admin/article">
                         Ajouter l'article
                </Link>
                         </button>
            
                </form>
    )
}

AddArticle.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    inputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default AddArticle;