import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Age from './pages/Age';
import Cholesterol from './pages/Cholesterol';
import GenderHeightWeight from './pages/GenderHeightWeight';
import Pressure from './pages/Pressure';
import Gluc from './pages/Gluc';
import SmokeAlcoActive from './pages/SmokeAlcoActive';
import Response from './pages/Response';

export default (isSigned = false) =>
  createAppContainer(
    createStackNavigator(
      {
        Age,
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
            backgroundColor: '#1f7ecc',
          },
          headerTintColor: '#fff',
        },
      },
      {
        initialRouteName: isSigned ? 'Age' : 'Age',
      }
    )
  );
