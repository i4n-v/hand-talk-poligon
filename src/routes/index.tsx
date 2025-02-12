import React, { useContext } from 'react';
import Auth from './Auth';
import Unauth from './Unauth';
import { AuthContext } from '@/contexts/AuthContext';

export default function Routes() {
  const { user } = useContext(AuthContext);

  return user ? <Auth /> : <Unauth />;
}
