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
    if (parseInt(text, 10) <= 20 && text) {
      setSystolic(text.replace(/[^0-9]/g, ''));
    } else {
      if (text) {
        Alert.alert('Sistólica', 'Sistólica máxima 20', [{ text: 'OK' }], {
          cancelable: false,
        });
      }
      setSystolic('');
    }
  }

  function onChangedDiastolic(text) {
    if (parseInt(text, 10) <= 10 && text) {
      setDiastolic(text.replace(/[^0-9]/g, ''));
    } else {
      if (text) {
        Alert.alert('Diastólica', 'Diastólica máxima 10', [{ text: 'OK' }], {
          cancelable: false,
        });
      }
      setDiastolic('');
    }
  }

  function handleSubmit() {
    if (!systolic || !diastolic) {
      Alert.alert(
        'Incompleto',
        'Digite ao menos uma resposta para cada pergunta'
      );
    } else {
      dispatch(UserCreators.changeSystolic(systolic * 10));
      dispatch(UserCreators.changeDiastolic(diastolic * 10));
      navigation.navigate('Response');
    }
  }

  return (
    <Container>
      <Case>
        <Center>
          <Painel>
            <PainelInput
              maxLength={2}
              placeholder="12"
              value={systolic}
              onChangeText={onChangedSystolic}
            />
            <PainelInput
              maxLength={2}
              placeholder="8"
              value={diastolic}
              onChangeText={onChangedDiastolic}
            />
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
