import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/blog/1">Post One</Link>
        </li>
        <li>
          <Link to="/blog/2">Post Two</Link>
        </li>
        <li>
          <Link to="/blog/3">Post Three</Link>
        </li>
      </ul>
    </div>
  );
}

export default Blog;
