// MainContent.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MainContent({ title, image, path }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={path} className="btn btn-primary">
          Start Quiz
        </Link>
      </div>
    </div>
  );
}

MainContent.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path:  PropTypes.string.isRequired,
};