import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({title, year}) => {
    return (
        <div className="details">
            <h3>{title}</h3>
            <span>{year}</span>
        </div>
    )
}

export default MovieDetails
