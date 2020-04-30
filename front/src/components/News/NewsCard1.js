import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const NewsCard1 = ({title, picture, content}) => {

    return(
        <div className="card card-color-0">
            <div className="border"></div>
            <img src={`http://54.166.4.90/projet-judo/back/public/uploads/articles/${picture.filePath}`} />
            <h1>{title}</h1> 
            <p hidden id='text-content-article'>{content}</p>           
        </div>
    );
}

NewsCard1.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default NewsCard1;