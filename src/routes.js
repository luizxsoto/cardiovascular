import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Sign from './pages/Sign/index';
import Sex from './pages/Sex';
import Birthday from './pages/Birthday';
import Height from './pages/Height';
import Weight from './pages/Weight';
import SmokeAlcoActive from './pages/SmokeAlcoActive';
import Cholesterol from './pages/Cholesterol';
import Gluc from './pages/Gluc';
import Pressure from './pages/Pressure';
import Response from './pages/Response';

import cardiogram from '~/assets/images/cardiogram.png';

export default (isSigned = false) =>
  createAppContainer(
    createStackNavigator(
      {
        Sign,
        Sex,
        Birthday,
        Height,
        Weight,
        SmokeAlcoActive,
        Cholesterol,
        Gluc,
        Pressure,
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
      },
      {
        initialRouteName: isSigned ? 'Age' : 'Age',
      }
    )
  );
