/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MovieList from '../../components/movie-list/movie-list';
import MovieType from '../../types/movie-type';

type MoviePageDetailsProps = {
  movieList: MovieType[];
};

const MoviePageDetails = (props: MoviePageDetailsProps): JSX.Element => (
  <body>
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">The Grand Budapest Hotel</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">Drama</span>
              <span className="film-card__year">2014</span>
            </p>
            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>
              <a href="add-review.html" className="btn film-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>
      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">Overview</a>
                </li>
                <li className="film-nav__item film-nav__item--active">
                  <a href="#" className="film-nav__link">Details</a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>
            <div className="film-card__text film-card__row">
              <div className="film-card__text-col">
                <p className="film-card__details-item">
                  <strong className="film-card__details-name">Director</strong>
                  <span className="film-card__details-value">Wes Anderson</span>
                </p>
                <p className="film-card__details-item">
                  <strong className="film-card__details-name">Starring</strong>
                  <span className="film-card__details-value">
                    Bill Murray, <br />
                    Edward Norton, <br />
                    Jude Law, <br />
                    Willem Dafoe, <br />
                    Saoirse Ronan, <br />
                    Tony Revoloru, <br />
                    Tilda Swinton, <br />
                    Tom Wilkinson, <br />
                    Owen Wilkinson, <br />
                    Adrien Brody, <br />
                    Ralph Fiennes, <br />
                    Jeff Goldblum
                  </span>
                </p>
              </div>
              <div className="film-card__text-col">
                <p className="film-card__details-item">
                  <strong className="film-card__details-name">Run Time</strong>
                  <span className="film-card__details-value">1h 39m</span>
                </p>
                <p className="film-card__details-item">
                  <strong className="film-card__details-name">Genre</strong>
                  <span className="film-card__details-value">Comedy</span>
                </p>
                <p className="film-card__details-item">
                  <strong className="film-card__details-name">Released</strong>
                  <span className="film-card__details-value">2014</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__films-list">
          <MovieList movieList={props.movieList} />
        </div>
      </section>

      <Footer/>
    </div>
  </body>
);

export default MoviePageDetails;
