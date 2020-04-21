import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const UserCard = ({picture, firstname, lastname, email,}) => (
    <div className="presentation__member__container__list__card">
        <img className="presentation__member__container__list__card__avatar img-fluid" src={picture}/>
        <div className="presentation__member__container__list__card__info">
            <p className="presentation__member__container__list__card__info__text">Nom : {firstname}</p> 
            <p className="presentation__member__container__list__card__info__text">Prénom : {lastname}</p> 
            <p className="presentation__member__container__list__card__info__text">Détails : {email}</p>  
        </div>
    </div>
);

UserCard.propTypes = {
    picture: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };

export default UserCard;