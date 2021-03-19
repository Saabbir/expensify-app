import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>Page Not Found! - <Link to="/">Go Home</Link></p>
  </div>
);

export default NotFoundPage;