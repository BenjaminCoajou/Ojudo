import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const UserCard = ({role, picture, firstname, lastname, email,}) => {
   
    if (role.name == "utilisateur"){
        return(

    <div className="presentation__member__container__scroll__list__card">
        <aside className="profile-card">

            <header className="header_presentation">
      
                <img src={picture}/>

                <h1> {firstname} {lastname}</h1>
                <br />
                <h2>{email}</h2>
            </header>

            <div className="profile-bio">

                <p>catégorie:
                <br />palmarès:</p>
            </div>

        </aside>
    </div>
   
);
}
return(
        null
        );
}

UserCard.propTypes = {
    role: PropTypes.array.isRequired,
    picture: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };

export default UserCard;