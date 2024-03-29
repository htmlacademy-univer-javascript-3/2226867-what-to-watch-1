import Header from '../header/header';

type PromoFilmType = {
  name: string;
  srcPoster: string;
  srcBg: string;
  genre: string;
  date: string;
};

const PromoMovie = (props: PromoFilmType): JSX.Element => (
  <section className="film-card">
    <div className="film-card__bg">
      <img src={props.srcBg} alt={props.name} />
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <Header/>

    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={props.srcPoster} alt={props.name} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{props.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{props.genre}</span>
            <span className="film-card__year">{props.date}</span>
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
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PromoMovie;
