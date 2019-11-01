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

export default function Height({ navigation }) {
  const dispatch = useDispatch();
  const [heightInput, setHeightInput] = useState();

  function onChangeHeight(text) {
    if (parseInt(text, 10) <= 250) {
      setHeightInput(text.replace(/[^0-9]/g, ''));
    } else {
      if (text) {
        Alert.alert('Altura', 'Altura máxima 250 cm', [{ text: 'OK' }], {
          cancelable: false,
        });
      }
      setHeightInput('');
    }
  }

  function handleSubmit() {
    if (heightInput >= 100) {
      dispatch(UserCreators.changeHeight(heightInput));
      navigation.navigate('Weight');
    } else {
      Alert.alert(
        'Altura invalida',
        'Digite uma Altura válida, maior ou igual a 100 cm',
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
      <QuestionText>Sua altura é:</QuestionText>
      <Panel>
        <PanelInput
          placeholder="Em centimetros"
          value={heightInput}
          onChangeText={onChangeHeight}
        />
      </Panel>
      <SendButton onPress={() => handleSubmit()}>
        <SendText>Próximo</SendText>
      </SendButton>
    </Container>
  );
}

Height.navigationOptions = {
  title: 'Sobre você',
};
