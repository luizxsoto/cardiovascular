import React from 'react';
import { useDispatch } from 'react-redux';
import { Creators as UserCreators } from '~/store/ducks/user';

import image from '~/assets/images/mesaMedico.jpg';
import normal from '~/assets/images/normal.png';
import acimaNormal from '~/assets/images/acimaNormal.png';
import bemAcimaNormal from '~/assets/images/bemAcimaNormal.png';
import { Container, Panel, CholesterolImage, CholesterolText } from './styles';

export default function Cholesterol({ navigation }) {
  const dispatch = useDispatch();

  function handleSubmit(response) {
    dispatch(UserCreators.changeCholesterol(response));
    navigation.navigate('Gluc');
  }

  return (
    <Container source={image}>
      <Panel onPress={() => handleSubmit(1)}>
        <CholesterolImage source={normal} />
        <CholesterolText>Normal</CholesterolText>
      </Panel>
      <Panel onPress={() => handleSubmit(2)}>
        <CholesterolImage source={acimaNormal} />
        <CholesterolText>Acima do normal</CholesterolText>
      </Panel>
      <Panel onPress={() => handleSubmit(3)}>
        <CholesterolImage source={bemAcimaNormal} />
        <CholesterolText>Bem acima do normal</CholesterolText>
      </Panel>
    </Container>
  );
}

Cholesterol.navigationOptions = {
  title: 'Colesterol',
};
