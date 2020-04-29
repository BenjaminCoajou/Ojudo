import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const NewsCard2 = ({title, picture, content}) => {

    return(
        <div className="card card-color-1">
            <div className="border"></div>
            <img src={picture} />
            <h1>{title}</h1>
            <p hidden id='text-content-article'>{content}</p>
        </div>
    );
}

NewsCard2.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default NewsCard2;