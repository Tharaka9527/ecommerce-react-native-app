import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';

console.disableYellowBox = true;

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
});

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#1976D2',
      inactiveTintColor: '#1A237E',
      showLabel: true,
    },
  },
);

const AuthStack = createSwitchNavigator({

    Login: {
      screen: LoginScreen,
    }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: SplashScreen,
      App: AppTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);