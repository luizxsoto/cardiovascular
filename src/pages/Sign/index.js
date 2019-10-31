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
        <LogoText>Higia</LogoText>
      </Panel>
      <Panel pos>
        <Label>Usuario</Label>
        <Input />
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

Sign.navigationOptions = {
  header: null,
};
