import React from 'react';
import './movieCard.css'

const MovieCard = ({ data }) => {
  return (
    <div className='movie'>
      <div>
        <p>{data.Year}</p>
      </div>

      <div>
        <img src={data.Poster} alt='img'/>
      </div>

      <div>
        <span>{data.Type}</span>
        <h3>{data.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
