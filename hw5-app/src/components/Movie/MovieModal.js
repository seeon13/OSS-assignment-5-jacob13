// components/Movie/MovieModal.js
import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';

const MovieModal = ({ movie, onClose, onSave }) => {
  const [movieData, setMovieData] = useState({
    title: '',
    posterUrl: '',
    year: '',
    genre: '',
    runtime: '',
    audience: ''
  });

  useEffect(() => {
    if (movie) {
      setMovieData(movie);
    }
  }, [movie]);

  const handleInputChange = (e) => {
    setMovieData({ ...movieData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = movie
      ? `https://672dfba9fd897971564488cd.mockapi.io/Movies/${movie.id}`
      : 'https://672dfba9fd897971564488cd.mockapi.io/Movies';
    const method = movie ? 'PUT' : 'POST';
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movieData)
    })
      .then(() => {
        onSave();
        onClose();
      })
      .catch(error => console.error('Error saving movie:', error));
  };

  return (
    <div className="modal fade show" style={{ display: 'block' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{movie ? 'Edit Movie' : 'Add New Movie'}</h5>
            <Button onClick={onClose} variant="close">
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="title">
                  <i className="fas fa-film mr-2"></i>Title:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={movieData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="posterUrl">
                  <i className="fas fa-image mr-2"></i>Poster URL:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="posterUrl"
                  value={movieData.posterUrl}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="year">
                  <i className="fas fa-calendar-alt mr-2"></i>Release Year:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="year"
                  value={movieData.year}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="genre">
                  <i className="fas fa-theater-masks mr-2"></i>Genre:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="genre"
                  value={movieData.genre}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="runtime">
                  <i className="fas fa-clock mr-2"></i>Runtime (minutes):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="runtime"
                  value={movieData.runtime}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="audience">
                  <i className="fas fa-users mr-2"></i>Audience:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="audience"
                  value={movieData.audience}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <Button onClick={onClose} variant="secondary">
                <i className="fas fa-times mr-2"></i>Cancel
              </Button>
              <Button type="submit" variant="success">
                <i className="fas fa-save mr-2"></i>Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
