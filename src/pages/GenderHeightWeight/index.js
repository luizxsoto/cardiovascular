import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Creators as UserCreators } from '~/store/ducks/user';

import image from '~/assets/images/mesaMedico.jpg';
import {
  Container,
  Panel,
  GenderBtn,
  GenderImage,
  GenderText,
  Input,
  SendButton,
  SendText,
} from './styles';

import adultoM from '~/assets/images/adultoM.png';
import adultoF from '~/assets/images/adultoF.png';

export default function GenderHeightWeight({ navigation }) {
  const [gender, setGender] = useState();
  const [heightInput, setHeightInput] = useState();
  const [weightInput, setWeightInput] = useState();
  const dispatch = useDispatch();

  function onChangedHeight(text) {
    setHeightInput(text.replace(/[^0-9]/g, ''));
  }

  function onChangedWeight(text) {
    setWeightInput(text.replace(/[^0-9]/g, ''));
  }

  function handleSubmit() {
    if (!gender || !heightInput || !weightInput) {
      Alert.alert(
        'Incompleto',
        'Selecione/digite ao menos uma resposta para cada pergunta'
      );
    } else {
      dispatch(UserCreators.changeGender(gender));
      dispatch(UserCreators.changeHeight(heightInput));
      dispatch(UserCreators.changeWeight(weightInput));
      navigation.navigate('Pressure');
    }
  }

  return (
    <Container source={image}>
      <Panel>
        <GenderBtn onPress={() => setGender(1)}>
          <GenderImage source={adultoF} />
          <GenderText>F</GenderText>
        </GenderBtn>
        <GenderText color>OU</GenderText>
        <GenderBtn onPress={() => setGender(2)}>
          <GenderImage source={adultoM} />
          <GenderText>M</GenderText>
        </GenderBtn>
      </Panel>
      <Panel>
        <Input
          placeholder="Sua altura em centimetros"
          value={heightInput}
          onChangeText={onChangedHeight}
        />
      </Panel>
      <Panel>
        <Input
          placeholder="Seu peso em kilos"
          value={weightInput}
          onChangeText={onChangedWeight}
        />
      </Panel>
      <SendButton onPress={() => handleSubmit()}>
        <SendText>Próximo</SendText>
      </SendButton>
    </Container>
  );
}

GenderHeightWeight.navigationOptions = {
  title: 'Genero/Peso/Altura',
};
