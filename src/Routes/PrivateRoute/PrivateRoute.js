import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
