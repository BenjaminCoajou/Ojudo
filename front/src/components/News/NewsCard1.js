import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const NewsCard1 = ({title, content, picture,}) => {

    return(
        <div className="card card-color-0">
            <div className="border"></div>
            <img src={picture} />
            <h1>{title}</h1>
            {content}
        </div>
    );
}

NewsCard1.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

export default NewsCard1;