import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  BackBtn,
  Panel,
  Label,
  Input,
  LogoImage,
  LogoText,
  SignBtn,
  SignBtnText,
} from './styles';

export default function SignIn({ navigation }) {
  function handleSignIn() {
    // navigation.navigate('Home');
  }

  function handleSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <Container>
      <BackBtn onPress={() => navigation.goBack()}>
        <Icon name="keyboard-backspace" size={30} color="#fff" />
      </BackBtn>
      <Panel>
        <LogoImage />
        <LogoText>Higia</LogoText>
      </Panel>
      <Panel pos>
        <Label>E-mail</Label>
        <Input keyboardType="email-address" />
        <Label>Senha</Label>
        <Input secureTextEntry />
      </Panel>
      <Panel>
        <SignBtn onPress={handleSignIn}>
          <SignBtnText>Entrar</SignBtnText>
        </SignBtn>
        <SignBtn background="#fff" onPress={handleSignUp}>
          <SignBtnText color="rgba(255, 0, 0, 0.7)">Cadastrar</SignBtnText>
        </SignBtn>
      </Panel>
    </Container>
  );
}

SignIn.navigationOptions = {
  header: null,
};
