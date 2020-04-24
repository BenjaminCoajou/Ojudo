import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import UserCardStaff from './UserCardStaff';

import Header from '../Header';
import Footer from '../Footer';

import './style.scss';
import dojo from './Dojo.jpg';

const Presentation = ({ list }) => {
    return (
    <div>
        <Header/>
    <div className="presentation">
        <div className="presentation__story">
            <div className="presentation__story__content">
                <h2 className="presentation__story__content__title">Histoire du Club</h2>
                <div className="presentation__story__content__img-text">
                    <img className="presentation__story__content__img-text__dojo img-fluid" src={dojo}/>
                    <p className="presentation__story__content__img-text__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio libero animi natus doloremque saepe nesciunt laboriosam aliquam, labore molestiae nihil voluptates quia sint, reiciendis officiis in, illum repellat totam rerum! Tempore dignissimos neque beatae consectetur praesentium voluptatum maxime officiis, possimus corrupti exercitationem sed delectus id quidem sapiente provident temporibus voluptates iste aliquid ex est harum eveniet. Obcaecati rerum deleniti natus laboriosam repellendus eos itaque molestiae, temporibus molestias, repellat libero. Sint soluta obcaecati temporibus placeat. Dolorum velit ipsa, ab inventore officia quae eos magnam, eveniet ullam commodi nulla omnis corporis nemo suscipit odio? Accusamus modi accusantium cum blanditiis necessitatibus rem suscipit odio voluptatum placeat incidunt ullam labore facilis voluptates doloremque, sint commodi assumenda laudantium totam, numquam est odit tempora in quam aspernatur. Quasi ab id maiores, ducimus alias perspiciatis officiis dolores quis consequuntur tenetur distinctio magni minima, aliquid qui quaerat veniam tempora adipisci perferendis reiciendis tempore. Nobis maxime consectetur deserunt fugiat, atque placeat, at quos accusantium expedita, aperiam magnam minus! Ullam nulla cum, quo facilis hic nobis! Quia ullam sit non maiores est soluta, quasi et atque amet quis, saepe reprehenderit quae hic ipsa? Iusto quo eveniet maxime deleniti debitis placeat illo et laudantium porro, minima voluptas atque, est saepe id.</p>
                </div>
            </div>
        </div>
        <div className="presentation__member">

            <div className="presentation__member__container">
                <div className="presentation__member__container__scroll">
                    <h2 className="presentation__member__container__scroll__title">Nos Licenciés</h2>
                    <div className="presentation__member__container__scroll__list">
                        {
                            list.map((card) => (
                                <UserCard key={card.id} {...card} />
                            ))
                        }                                    
                    </div>
                </div>               
            </div>

            <div className="presentation__member__container">
                <div className="presentation__member__container__scroll">
                    <h2 className="presentation__member__container__scroll__title">Notre staff</h2>
                    <div className="presentation__member__container__scroll__list">
                        {
                            list.map((card) => (
                                <UserCard key={card.id} {...card} />
                            ))
                        }                                    
                    </div>
                </div>               
            </div>
        </div>
    </div>
      <Footer/>
    </div>
    );
}

Presentation.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
};

export default Presentation;