import React, { useState } from 'react';
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
    setHeightInput(text.replace(/[^0-9]/g, ''));
  }

  function handleSubmit() {
    // dispatch(UserCreators.changeHeight(heightInput));
    // navigation.navigate('');
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
  title: 'Altura',
};
