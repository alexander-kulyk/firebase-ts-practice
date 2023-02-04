import React from 'react';
import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <ul>
      <li>
        <Link to="login">login</Link>
      </li>
      <li>
        <Link to="registration">registration</Link>
      </li>
    </ul>
  );
};
