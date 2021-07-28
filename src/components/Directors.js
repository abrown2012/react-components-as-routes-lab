import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
<div>
     <h1>
      Directors Page
     </h1>
     {directors.map((director, index)=>(
       <div className='director' key={index}>
        Name: {director.name}
        Movies: {director.movies.map((movie, index)=> (
          <li key={index}>{movie}</li>
        ))}
       </div>
     ))}
    </div>
  );
};

export default Directors
