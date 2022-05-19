import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import { settings } from '../../common/settings';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const { Response, Search, Error } = movies;
  let renderMovies,
    renderShows = '';
  renderMovies =
    Response === 'True' ? (
      Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className='movie-error'>
        <h3>{Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className='movie-error'>
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className='movie-wrapper'>
        <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          {Object.keys(movies).length === 0 ? (
            <div>Loading......</div>
          ) : (
            <Slider {...settings}>{renderMovies}</Slider>
          )}
        </div>
      </div>
      <div className='movie-list'>
        <h2>Shows</h2>
        <div className='movie-container'>
          {Object.keys(shows).length === 0 ? (
            <div>Loading......</div>
          ) : (
            <Slider {...settings}>{renderShows}</Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
