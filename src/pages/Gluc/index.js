import React from 'react';
import { useDispatch } from 'react-redux';
import { Creators as UserCreators } from '~/store/ducks/user';

import image from '~/assets/images/mesaMedico.jpg';
import normal from '~/assets/images/normal.png';
import acimaNormal from '~/assets/images/acimaNormal.png';
import bemAcimaNormal from '~/assets/images/bemAcimaNormal.png';
import { Container, Panel, GlucImage, GlucText } from './styles';

export default function Gluc({ navigation }) {
  const dispatch = useDispatch();

  function handleSubmit(response) {
    dispatch(UserCreators.changeGluc(response));
    navigation.navigate('SmokeAlcoActive');
  }

  return (
    <Container source={image}>
      <Panel onPress={() => handleSubmit(1)}>
        <GlucImage source={normal} />
        <GlucText>Normal</GlucText>
      </Panel>
      <Panel onPress={() => handleSubmit(2)}>
        <GlucImage source={acimaNormal} />
        <GlucText>Acima do normal</GlucText>
      </Panel>
      <Panel onPress={() => handleSubmit(3)}>
        <GlucImage source={bemAcimaNormal} />
        <GlucText>Bem acima do normal</GlucText>
      </Panel>
    </Container>
  );
}

Gluc.navigationOptions = {
  title: 'Glicose',
};
