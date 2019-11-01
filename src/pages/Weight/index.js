import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Creators as UserCreators } from '~/store/ducks/user';

import {
  Container,
  QuestionImage,
  QuestionText,
  Panel,
  PanelInput,
  SendButton,
  SendText,
} from './styles';

export default function Weight({ navigation }) {
  const dispatch = useDispatch();
  const [weightInput, setWeightInput] = useState();

  function onChangeWeight(text) {
    if (parseInt(text, 10) <= 150 && text) {
      setWeightInput(text.replace(/[^0-9]/g, ''));
    } else {
      if (text) {
        Alert.alert('Peso', 'Peso máximo 150 kg', [{ text: 'OK' }], {
          cancelable: false,
        });
      }
      setWeightInput('');
    }
  }

  function handleSubmit() {
    if (weightInput >= 40) {
      dispatch(UserCreators.changeWeight(weightInput));
      navigation.navigate('SmokeAlcoActive');
    } else {
      Alert.alert(
        'Peso invalido',
        'Digite um Peso válido, maior ou igual a 40 kg',
        [{ text: 'OK' }],
        {
          cancelable: false,
        }
      );
    }
  }

  return (
    <Container>
      <QuestionImage />
      <QuestionText>Seu peso é:</QuestionText>
      <Panel>
        <PanelInput
          placeholder="Em kilos"
          value={weightInput}
          onChangeText={onChangeWeight}
        />
      </Panel>
      <SendButton onPress={() => handleSubmit()}>
        <SendText>Próximo</SendText>
      </SendButton>
    </Container>
  );
}

Weight.navigationOptions = {
  title: 'Sobre você',
};
