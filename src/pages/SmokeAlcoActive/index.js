import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Creators as UserCreators } from '~/store/ducks/user';

import fuma from '~/assets/images/fuma.png';
import naoFuma from '~/assets/images/naoFuma.png';
import bebe from '~/assets/images/bebe.png';
import naoBebe from '~/assets/images/naoBebe.png';
import maoSim from '~/assets/images/maoSim.png';
import maoNao from '~/assets/images/maoNao.png';
import image from '~/assets/images/mesaMedico.jpg';
import {
  Container,
  Panel,
  ResponseBtn,
  ResponseImage,
  ResponseText,
  SendButton,
  SendText,
} from './styles';

export default function SmokeAlcoActive({ navigation }) {
  const [smoke, setSmoke] = useState(-1);
  const [alco, setAlco] = useState(-1);
  const [active, setActive] = useState(-1);
  const dispatch = useDispatch();

  function handleSubmit() {
    if (smoke < 0 || alco < 0 || active < 0) {
      Alert.alert(
        'Incompleto',
        'Selecione ao menos uma resposta para cada pergunta'
      );
    } else {
      dispatch(UserCreators.changeSmoke(smoke));
      dispatch(UserCreators.changeAlco(alco));
      dispatch(UserCreators.changeActive(active));
      navigation.navigate('Response');
    }
  }

  return (
    <Container source={image}>
      <Panel>
        <ResponseBtn onPress={() => setSmoke(1)}>
          <ResponseImage source={fuma} />
        </ResponseBtn>
        <ResponseText>OU</ResponseText>
        <ResponseBtn onPress={() => setSmoke(0)}>
          <ResponseImage source={naoFuma} />
        </ResponseBtn>
      </Panel>
      <Panel>
        <ResponseBtn onPress={() => setAlco(1)}>
          <ResponseImage source={bebe} />
        </ResponseBtn>
        <ResponseText>OU</ResponseText>
        <ResponseBtn onPress={() => setAlco(0)}>
          <ResponseImage source={naoBebe} />
        </ResponseBtn>
      </Panel>
      <Panel>
        <ResponseBtn onPress={() => setActive(1)}>
          <ResponseImage source={maoSim} />
        </ResponseBtn>
        <ResponseText>SE EXERCITA?</ResponseText>
        <ResponseBtn onPress={() => setActive(0)}>
          <ResponseImage source={maoNao} />
        </ResponseBtn>
      </Panel>
      <SendButton onPress={() => handleSubmit()}>
        <SendText>Próximo</SendText>
      </SendButton>
    </Container>
  );
}

SmokeAlcoActive.navigationOptions = {
  title: 'Fuma/Bebe/Ativo',
};
