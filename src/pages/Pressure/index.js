import React, { useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { Creators as UserCreators } from '~/store/ducks/user';

import {
  Container,
  Case,
  Center,
  Painel,
  PainelInput,
  CenterRow,
  CenterButton,
  CaseRow,
  BtnBack,
  BtnOk,
  BtnText,
} from './styles';

export default function Pressure({ navigation }) {
  const [systolic, setSystolic] = useState();
  const [diastolic, setDiastolic] = useState();
  const dispatch = useDispatch();

  function onChangedSystolic(text) {
    setSystolic(text.replace(/[^0-9,]/g, ''));
  }

  function onChangedDiastolic(text) {
    setDiastolic(text.replace(/[^0-9,]/g, ''));
  }

  function handleSubmit() {
    if (!systolic || !diastolic) {
      Alert.alert(
        'Incompleto',
        'Digite ao menos uma resposta para cada pergunta'
      );
    } else {
      dispatch(UserCreators.changeSystolic(systolic));
      dispatch(UserCreators.changeDiastolic(diastolic));
      navigation.navigate('Response');
    }
  }

  return (
    <Container>
      <Case>
        <Center>
          <Painel>
            <PainelInput value={systolic} onChangeText={onChangedSystolic} />
            <PainelInput value={diastolic} onChangeText={onChangedDiastolic} />
          </Painel>
          <CenterRow>
            <CenterButton onPress={() => {}}>
              <Icon name="power-cycle" size={15} color="#fff" />
            </CenterButton>
            <CenterButton onPress={() => {}}>
              <BtnText>+</BtnText>
            </CenterButton>
          </CenterRow>
        </Center>
        <CaseRow>
          <BtnBack onPress={() => navigation.goBack()}>
            <Icon name="keyboard-backspace" size={30} color="#fff" />
          </BtnBack>
          <BtnOk onPress={() => handleSubmit()}>
            <Icon name="power" size={30} color="#fff" />
          </BtnOk>
        </CaseRow>
      </Case>
    </Container>
  );
}

Pressure.navigationOptions = {
  title: 'Pressão',
};
