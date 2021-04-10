import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="c-page-not-found">
    <div className="l-wrap">
      <h1 className="c-page-not-found__title">404!</h1>
      <p>Page Not Found. <Link to="/">Go Home</Link>.</p>
    </div>
  </div>
);

export default NotFoundPage;