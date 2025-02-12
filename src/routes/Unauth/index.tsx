import React from 'react';
import { Signin } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UnauthStackParamList } from './types';

const Stack = createNativeStackNavigator<UnauthStackParamList>();

export default function Unauth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
