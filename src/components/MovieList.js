import React from 'react'
import {Fragment} from 'react'

const MovieList = ({movies}) => {
    return (
        <Fragment>
        {movies.map((movie, index) => 
            <div>
                <img src={movie.Poster} alt="movie-poster" />
            </div>
        )}
        </Fragment>
    )
}

export default MovieList
