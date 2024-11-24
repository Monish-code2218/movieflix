import React from 'react'
import "../styles/Movies.css"

const MovieList = (movie) => {
  return (
    <div className='Movie'>
        {movie.movies.map((movie,index)=><div className='image-container '>
            <img src={movie.Poster} alt="movie" />
            <h3>{movie.Title}</h3>
            <h3>{movie.Year}</h3>
            
        </div>)}
    </div>
  )
}


export default MovieList;