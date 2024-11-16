// components/Movie/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onEdit, onDelete }) => {
  return (
    <div className="row justify-content-start">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default MovieList;
