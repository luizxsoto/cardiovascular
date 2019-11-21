import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as UserCreators } from '~/store/ducks/user';

import fuma from '~/assets/images/fuma.png';
import naoFuma from '~/assets/images/naoFuma.png';
import bebe from '~/assets/images/bebe.png';
import naoBebe from '~/assets/images/naoBebe.png';
import exercita from '~/assets/images/exercita.png';
import naoExercita from '~/assets/images/naoExercita.png';
import {
  Container,
  Panel,
  QuestionText,
  PanelBtn,
  PanelImage,
  PanelText,
  SendButton,
  SendText,
} from './styles';

export default function SmokeAlcoActive({ navigation }) {
  const signed = useSelector(state => state.auth.signed);
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
      dispatch(UserCreators.changeSmoke(Number(smoke)));
      dispatch(UserCreators.changeAlco(Number(alco)));
      dispatch(UserCreators.changeActive(Number(active)));
      navigation.navigate('CholGlucPress');
    }
  }

  return (
    <Container>
      <QuestionText>
        {signed ? 'Novos costumes' : 'Tem costume de'}:
      </QuestionText>
      <Panel>
        <PanelBtn checked={smoke === 0} onPress={() => setSmoke(0)}>
          <PanelImage source={naoFuma} />
        </PanelBtn>
        <PanelText>FUMAR?</PanelText>
        <PanelBtn checked={smoke === 1} onPress={() => setSmoke(1)}>
          <PanelImage source={fuma} />
        </PanelBtn>
      </Panel>
      <Panel>
        <PanelBtn checked={alco === 0} onPress={() => setAlco(0)}>
          <PanelImage source={naoBebe} />
        </PanelBtn>
        <PanelText>BEBER ÁLCOOL ?</PanelText>
        <PanelBtn checked={alco === 1} onPress={() => setAlco(1)}>
          <PanelImage source={bebe} />
        </PanelBtn>
      </Panel>
      <Panel>
        <PanelBtn checked={active === 0} onPress={() => setActive(0)}>
          <PanelImage source={naoExercita} />
        </PanelBtn>
        <PanelText>SE EXERCITAR?</PanelText>
        <PanelBtn checked={active === 1} onPress={() => setActive(1)}>
          <PanelImage source={exercita} />
        </PanelBtn>
      </Panel>
      <SendButton onPress={() => handleSubmit()}>
        <SendText>Próximo</SendText>
      </SendButton>
    </Container>
  );
}

SmokeAlcoActive.navigationOptions = {
  title: 'Sobre seus hábitos',
};
