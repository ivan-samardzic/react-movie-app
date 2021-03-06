import React from 'react'
import {Fragment} from 'react'
import './MovieList.css'

const MovieList = ({movies, favouriteComponent, handleFavouritesClick, movieDetails}) => {
    const FavouriteComponent = favouriteComponent;
    const MovieDetails = movieDetails;
    return (
        <Fragment>
        {movies.map((movie, index) => 
            <div className="image-container d-flex justify-content-start m-3">
                <img className="movie-poster" src={movie.Poster} alt="movie-poster" />
                <div className="details d-flex align-items-center justify-content-center">
                    <MovieDetails title={movie.Title} year={movie.Year} />
                </div>
                <div onClick={() => handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                    <FavouriteComponent />
                </div>
            </div>
        )}
        </Fragment>
    )
}

export default MovieList
