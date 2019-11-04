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
    navigation.navigate('Sex');
    // navigation.navigate('SignIn');
  }

  function handleSignUp() {
    // navigation.navigate('SignUp');
  }

  return (
    <Container>
      <Panel>
        <LogoImage />
        <LogoText>Higia</LogoText>
      </Panel>
      <Panel pos>
        <Label>Nome</Label>
        <Input />
        <Label>E-mail</Label>
        <Input keyboardType="email-address" />
      </Panel>
      <Panel>
        <SignBtn onPress={handleSignIn}>
          <SignBtnText>Verificar minha saúde</SignBtnText>
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
