import React from 'react';
import Auth from './Auth';
import Unauth from './Unauth';

export default function Routes() {
  const isAuthenticated = false;

  return isAuthenticated ? <Auth /> : <Unauth />;
}
