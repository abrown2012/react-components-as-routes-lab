import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>
     Movies Page
    </h1>
    {movies.map((movie, index)=>(
      <div className='movie' key={index}>
       Title: {movie.title}
       Time: {movie.time}
       Genres: {movie.genres.map((genre, index)=> (
         <li key={index}>{genre}</li>
       ))}
      </div>
    ))}
   </div>
 );
};

export default Movies;
