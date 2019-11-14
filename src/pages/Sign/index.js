import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';

import { Creators as UserCreators } from '~/store/ducks/user';

import {
  Container,
  Panel,
  Label,
  InputName,
  LogoImage,
  LogoText,
  SignBtn,
  SignBtnText,
} from './styles';

export default function Sign({ navigation }) {
  const dispatch = useDispatch();
  const [name, setName] = useState();

  function handleTrial() {
    if (name) {
      Keyboard.dismiss();
      dispatch(UserCreators.changeUser({ name }));
      navigation.navigate('Sex');
    } else {
      Alert.alert(
        'Nome necessário',
        'Digite seu nome para melhores interações',
        [{ text: 'OK' }],
        {
          cancelable: false,
        }
      );
    }
  }

  function handleSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <Panel>
        <LogoImage />
        <LogoText>Higia</LogoText>
      </Panel>
      <Panel>
        <Label>Digite seu nome</Label>
        <InputName
          onSubmitEditing={() => handleSignIn()}
          value={name}
          onChangeText={text => setName(text)}
        />
      </Panel>
      <Panel>
        <SignBtn background="#fff" onPress={handleTrial}>
          <SignBtnText color="rgba(255, 0, 0, 0.7)">
            Verificar minha saúde
          </SignBtnText>
        </SignBtn>
        <SignBtn onPress={handleSignIn}>
          <SignBtnText>Ja pussuo conta</SignBtnText>
        </SignBtn>
      </Panel>
    </Container>
  );
}

Sign.navigationOptions = {
  header: null,
};
