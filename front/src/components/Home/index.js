import React from 'react';
import PropTypes from 'prop-types';

import Calendar from '../../containers/Calendar';
import Header from '../Header';
import Footer from '../Footer';

import './style.scss';

const Home = ({isLoading}) => (
    <div>
        <Header/>
    <div className="home d-md-flex flex-md-column">
        <div className="home__info d-md-flex justify-content-md-around">
            <div className="home__info__content">
                <h2 className="home__info__content__title">Présentation du club</h2>
                <p className="home__info__content__text">Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro citroque discursantes quicquid inveniri poterat momento temporis parvi vastabant milvorum rapacium similes, qui si praedam dispexerint celsius, volatu rapiunt celeri, aut nisi impetraverint, non inmorantur.
                Sed (saepe enim redeo ad Scipionem, cuius omnis sermo erat de amicitia) querebatur, quod omnibus in rebus homines diligentiores essent; capras et oves quot quisque haberet, dicere posse, amicos quot haberet, non posse dicere et in illis quidem parandis adhibere curam, in amicis eligendis neglegentis esse nec habere quasi signa quaedam et notas, quibus eos qui ad amicitias essent idonei, iudicarent. Sunt igitur firmi et stabiles et constantes eligendi; cuius generis est magna penuria. Et iudicare difficile est sane nisi expertum; experiendum autem est in ipsa amicitia. Ita praecurrit amicitia iudicium tollitque experiendi potestatem.
                Illud tamen clausos vehementer angebat quod captis navigiis, quae frumenta vehebant per flumen, Isauri quidem alimentorum copiis adfluebant, ipsi vero solitarum rerum cibos iam consumendo inediae propinquantis aerumnas exitialis horrebant.</p>
            </div>
            <div className="home__info__content">
                <h2 className="home__info__content__title">Dernier événement</h2>
                <h3 className="home__info__content__title__event">nom de l'event</h3>
                <p className="home__info__content__text">
                Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro citroque discursantes quicquid inveniri poterat momento temporis parvi vastabant milvorum rapacium similes, qui si praedam dispexerint celsius, volatu rapiunt celeri, aut nisi impetraverint, non inmorantur.
                Sed (saepe enim redeo ad Scipionem, cuius omnis sermo erat de amicitia) querebatur, quod omnibus in rebus homines diligentiores essent; capras et oves quot quisque haberet, dicere posse, amicos quot haberet, non posse dicere et in illis quidem parandis adhibere curam, in amicis eligendis neglegentis esse nec habere quasi signa quaedam et notas, quibus eos qui ad amicitias essent idonei, iudicarent. Sunt igitur firmi et stabiles et constantes eligendi; cuius generis est magna penuria. Et iudicare difficile est sane nisi expertum; experiendum autem est in ipsa amicitia. Ita praecurrit amicitia iudicium tollitque experiendi potestatem.
                Illud tamen clausos vehementer angebat quod captis navigiis, quae frumenta vehebant per flumen, Isauri quidem alimentorum copiis adfluebant, ipsi vero solitarum rerum cibos iam consumendo inediae propinquantis aerumnas exitialis horrebant.
                </p>
            </div>
        </div>
        { isLoading ?
        <div class="d-flex justify-content-center home__spinner">
            <div class="spinner-border home__spinner__border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> 
        : <div className="home__calendar"><Calendar /></div> }
    </div>
    <Footer/>
    </div>
);

Home.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}

export default Home;