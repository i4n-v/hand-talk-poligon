import React from 'react';
import { Home, Settings } from '@/screens';
import { AuthTabParamList } from './types';
import { Header } from '@/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';
import { Settings as SettingsIcon, Home as HomeIcon } from '@/components/Icons';

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
          tabBarIcon: (props) => <HomeIcon {...props} />,
          header: (props) => <Header isUser {...props} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Configurações',
          tabBarIcon: (props) => <SettingsIcon {...props} />,
          header: (props) => <Header {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
