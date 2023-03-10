/* eslint-disable jsx-a11y/anchor-is-valid */
import MovieCard from '../../components/movie-card/movie-card';
import {PropsWithChildren} from 'react';

type MainePageProps = PropsWithChildren<{
  title: string;
  genre: string;
  year: number;
}>

function MainPage({title, genre, year}: MainePageProps): JSX.Element {
  return (
    <div className='container'>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src='img/bg-the-grand-budapest-hotel.jpg' alt='The Grand Budapest Hotel' />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header film-card__head'>
          <div className='logo'>
            <a className='logo__link'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </a>
          </div>

          <ul className='user-block'>
            <li className='user-block__item'>
              <div className='user-block__avatar'>
                <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
              </div>
            </li>
            <li className='user-block__item'>
              <a className='user-block__link'>Sign out</a>
            </li>
          </ul>
        </header>

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img src='img/the-grand-budapest-hotel-poster.jpg' alt='The Grand Budapest Hotel poster' width='218' height='327' />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{title}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{genre}</span>
                <span className='film-card__year'>{year}</span>
              </p>

              <div className='film-card__buttons'>
                <button className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <ul className='catalog__genres-list'>
            <li className='catalog__genres-item catalog__genres-item--active'>
              <a href='#' className='catalog__genres-link'>All genres</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Comedies</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Crime</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Documentary</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Dramas</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Horror</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Kids & Family</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Romance</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Sci-Fi</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Thrillers</a>
            </li>
          </ul>

          <div className='catalog__films-list'>
            <MovieCard title = {'Fantastic Beasts: The Crimes of Grindelwald'} img = {'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'} />
            <MovieCard title = {'Bohemian Rhapsody'} img = {'img/bohemian-rhapsody.jpg'} />
            <MovieCard title = {'Macbeth'} img = {'img/macbeth.jpg'} />
            <MovieCard title = {'Aviator'} img = {'img/aviator.jpg'} />
            <MovieCard title = {'We need to talk about Kevin'} img = {'img/we-need-to-talk-about-kevin.jpg'} />
            <MovieCard title = {'What We Do in the Shadows'} img = {'img//what-we-do-in-the-shadows.jpg'} />
            <MovieCard title = {'Revenant'} img = {'img/revenant.jpg'} />
            <MovieCard title = {'Johnny English'} img = {'img/johnny-english.jpg'} />
            <MovieCard title = {'Shutter Island'} img = {'img/shutter-island.jpg'} />
            <MovieCard title = {'Pulp Fiction'} img = {'img/pulp-fiction.jpg'} />
            <MovieCard title = {'No country for old men'} img = {'img/no-country-for-old-men.jpg'} />
            <MovieCard title = {'Snatch'} img = {'img/snatch.jpg'} />
            <MovieCard title = {'Moonrise Kingdom'} img = {'img/moonrise-kingdom.jpg'} />
            <MovieCard title = {'Seven Years in Tibet'} img = {'img/seven-years-in-tibet.jpg'} />
            <MovieCard title = {'Midnight Special'} img = {'img/midnight-special.jpg'} />
            <MovieCard title = {'War of the Worlds'} img = {'img/war-of-the-worlds.jpg'} />
            <MovieCard title = {'Dardjeeling Limited'} img = {'img/dardjeeling-limited.jpg'} />
            <MovieCard title = {'Orlando'} img = {'img/orlando.jpg'} />
            <MovieCard title = {'Mindhunter'} img = {'img/mindhunter.jpg'} />
            <MovieCard title = {'Midnight Special'} img = {'img/midnight-special.jpg'} />
          </div>

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>Show more</button>
          </div>
        </section>

        <footer className='page-footer'>
          <div className='logo'>
            <a className='logo__link logo__link--light'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </a>
          </div>

          <div className='copyright'>
            <p>?? 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MainPage;
