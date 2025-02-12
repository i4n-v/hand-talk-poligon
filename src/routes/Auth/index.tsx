import React from 'react';
import { Home, Settings } from '@/screens';
import { AuthTabParamList } from './types';
import { Header } from '@/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';
import Icon from '@react-native-vector-icons/material-icons';

const Tab = createBottomTabNavigator<AuthTabParamList>();

export default function Auth() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary?.[300],
        tabBarInactiveTintColor: theme.colors.secondary?.[0],
        tabBarStyle: {
          backgroundColor: theme.colors.secondary?.[1000],
          borderColor: theme.colors.secondary?.[900],
          height: 60,
        },
        tabBarLabelStyle: {
          fontFamily: theme.typography.fonts.primary.normal,
          fontSize: theme.typography.size.xxs,
          color: theme.colors.secondary?.[0],
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: (props) => <Icon name="home" {...props} />,
          header: (props) => <Header isUser {...props} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Configurações',
          tabBarIcon: (props) => <Icon name="settings" {...props} />,
          header: (props) => <Header {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
