import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const NewsCard1 = ({content, picture,}) => {

    return(
        <div className="card card-color-0">
            <div className="border"></div>
            <img src={picture} />
            <h1>{content}</h1>
        </div>
    );
}

NewsCard1.propTypes = {
    content: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

export default NewsCard1;