import React from 'react';
import { actors } from '../data';

const Actors = (props) => {
  return (
    <div>
     <h1>
      Actors Page
     </h1>
     {actors.map((actor, index)=>(
       <div className='actor' key={index}>
        Name: {actor.name}
        Movies: {actor.movies.map((movie, index)=> (
          <li key={index}>{movie}</li>
        ))}
       </div>
     ))}
    </div>
  );
};

export default Actors;
