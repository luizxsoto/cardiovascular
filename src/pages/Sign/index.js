import React from 'react';

import {
  Container,
  Panel,
  Label,
  Input,
  LogoImage,
  LogoText,
  SignBtn,
  SignBtnText,
} from './styles';

export default function Sign({ navigation }) {
  function handleSignIn() {
    navigation.navigate('Gender');
    // navigation.navigate('SignIn');
  }

  function handleSignUp() {
    // navigation.navigate('SignUp');
  }

  return (
    <Container>
      <Panel>
        <LogoImage />
        <LogoText>Your Life</LogoText>
      </Panel>
      <Panel pos>
        <Label>Nome</Label>
        <Input />
        <Label>E-mail</Label>
        <Input keyboardType="email-address" />
      </Panel>
      <Panel>
        <SignBtn onPress={handleSignIn}>
          <SignBtnText>Iniciar</SignBtnText>
        </SignBtn>
        <SignBtn background="#fff" onPress={handleSignUp}>
          <SignBtnText color="rgba(255, 0, 0, 0.7)">Entrar</SignBtnText>
        </SignBtn>
      </Panel>
    </Container>
  );
}

Sign.navigationOptions = {
  header: null,
};
