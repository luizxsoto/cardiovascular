import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import Sign from './pages/Sign';
import Age from './pages/Age';
import Gender from './pages/Gender';
import Height from './pages/Height';
import Cholesterol from './pages/Cholesterol';
import GenderHeightWeight from './pages/GenderHeightWeight';
import Pressure from './pages/Pressure';
import Gluc from './pages/Gluc';
import SmokeAlcoActive from './pages/SmokeAlcoActive';
import Response from './pages/Response';

import cardiogram from '~/assets/images/cardiogram.png';

export default (isSigned = false) =>
  createAppContainer(
    createStackNavigator(
      {
        Height,
        // Sign,
        Age,
        Gender,
        GenderHeightWeight,
        Pressure,
        Cholesterol,
        Gluc,
        SmokeAlcoActive,
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
