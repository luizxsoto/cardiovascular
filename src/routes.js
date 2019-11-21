import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Sign from './pages/Sign';
import SignIn from './pages/Sign/signin';
import SignUp from './pages/Sign/signup';
import Home from './pages/Home';
import Sex from './pages/Sex';
import Birthday from './pages/Birthday';
import Height from './pages/Height';
import Weight from './pages/Weight';
import SmokeAlcoActive from './pages/SmokeAlcoActive';
import CholGlucPress from './pages/CholGlucPress';
import Response from './pages/Response';
import Quiz from './pages/Quiz';

import cardiogram from '~/assets/images/cardiogram.png';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Off: createStackNavigator(
          {
            Sign,
            SignIn,
            SignUp,
            Sex,
            Birthday,
            Height,
            Weight,
            SmokeAlcoActive,
            CholGlucPress,
            Response,
          },
          {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
              headerStyle: {
                backgroundColor: '#49b1e9',
              },
              headerTintColor: '#fff',
              headerRight: (
                <Image
                  source={cardiogram}
                  style={{ height: 32, width: 32, marginRight: 10 }}
                />
              ),
            },
          }
        ),
        On: createStackNavigator(
          {
            Home,
            Quiz,
            Height,
            Weight,
            SmokeAlcoActive,
            CholGlucPress,
            Response,
          },
          {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
              headerStyle: {
                backgroundColor: '#49b1e9',
              },
              headerTintColor: '#fff',
              headerRight: (
                <Image
                  source={cardiogram}
                  style={{ height: 32, width: 32, marginRight: 10 }}
                />
              ),
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'On' : 'Off',
      }
    )
  );
