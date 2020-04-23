import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import Calendar from "../../containers/Calendar";
import Header from "../Header";
import Footer from "../Footer";

import "./style.scss";

const Home = ({ isLoading, events, dateObject, presIsLoaded, presInfo }) => {
  const today = dateObject.format();
  const allEvents = events.map((evt) => moment(evt.date).format());
  allEvents.push(today);
  allEvents.sort();
  const i = allEvents.indexOf(today);
  const r = allEvents[i + 1];
  const show = events.find((e) => moment(e.date).format() == r);

  return (
    <div>
      <Header />
      {!isLoading ? <div className="up">
        <div className="up__container">
          <div className="card_present">
            <div className="blog-card spring-fever">
              <div className="title-content">
                <h3>Notre club</h3>
                <hr />
                <div className="intro">{presInfo[0].title}</div>
              </div>
              <div className="card-info">
              {presInfo[0].content}
              </div>
            </div>
          </div>
          <div className="wrap_events">
            <div className="calendarContainer">
              <Calendar />
            </div>
          </div>
            <div className="organizerContainer">
              <div className="demo-card-image mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand"></div>
              </div>
              <div className="demo-card-event mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand">
                  <h4>
                    Prochain événement:<br />
                    {moment(show.date).format('MMMM D, YYYY')+','}<br />
                    {show.content}
                    
                  </h4>
                </div>
              </div>
            </div>
        </div>
      </div>: ""}
      <div className="wrap_articles">
        <div>
          <h2>Les derniers articles</h2>
        </div>

        <div className="tile">
          <img src="https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80" />
          <div className="text">
            <h1>Lorem ipsum.</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
                prosciutto kevin turducken.{" "}
            </p>
          </div>
        </div>
        <div className="tile">
          <img src="https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80" />
          <div className="text">
            <h1>Lorem ipsum.</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
                prosciutto kevin turducken.{" "}
            </p>
          </div>
        </div>


        <div className="tile">
          <img src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80" />
          <div className="text">
            <h1>Lorem ipsum.</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
                prosciutto kevin turducken.{" "}
            </p>
          </div>
        </div>

        <div className="tile">
          <img src="https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80" />
          <div className="text">
            <h1>Lorem ipsum.</h1>
            <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p className="animate-text">
              Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
              bresaola pork chicken meatloaf. Flank sirloin strip steak
                prosciutto kevin turducken.{" "}
            </p>
          </div>
        </div>
      </div>







      <Footer />
    </div>

  );
};

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  events: PropTypes.array.isRequired,
  dateObject: PropTypes.object.isRequired,
  presIsLoaded: PropTypes.bool.isRequired,
};

export default Home;

















{
  /* <div className="home d-md-flex flex-md-column">
    <div className="home__info d-md-flex justify-content-md-around">
      <div className="home__info__content">
        <h2 className="home__info__content__title">Présentation du club</h2>
        <p className="home__info__content__text">
          Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro
          citroque discursantes quicquid inveniri poterat momento temporis
          parvi vastabant milvorum rapacium similes, qui si praedam
          dispexerint celsius, volatu rapiunt celeri, aut nisi
          impetraverint, non inmorantur. Sed (saepe enim redeo ad Scipionem,
          cuius omnis sermo erat de amicitia) querebatur, quod omnibus in
          rebus homines diligentiores essent; capras et oves quot quisque
          haberet, dicere posse, amicos quot haberet, non posse dicere et in
          illis quidem parandis adhibere curam, in amicis eligendis
          neglegentis esse nec habere quasi signa quaedam et notas, quibus
          eos qui ad amicitias essent idonei, iudicarent. Sunt igitur firmi
          et stabiles et constantes eligendi; cuius generis est magna
          penuria. Et iudicare difficile est sane nisi expertum; experiendum
          autem est in ipsa amicitia. Ita praecurrit amicitia iudicium
          tollitque experiendi potestatem. Illud tamen clausos vehementer
          angebat quod captis navigiis, quae frumenta vehebant per flumen,
          Isauri quidem alimentorum copiis adfluebant, ipsi vero solitarum
          rerum cibos iam consumendo inediae propinquantis aerumnas
          exitialis horrebant.
        </p>
      </div>
      {show == undefined ? (
        ""
      ) : (
        <div className="home__info__content">
          <h2 className="home__info__content__title">Dernier événement</h2>
          <h3 className="home__info__content__title__event">
            {show.title}
          </h3>
          <p className="home__info__content__text">
            {moment(show.date).format("D MMMM YYYY")}
          </p>
          <p className="home__info__content__text">{show.place}</p>
          <p className="home__info__content__text">{show.content}</p>
        </div>
      )}
    </div>

    {isLoading ? (
      <div className="d-flex justify-content-center home__spinner">
        <div className="spinner-border home__spinner__border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ) : ( 
      
    )} 
  </div> */
}
