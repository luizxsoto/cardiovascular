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
  function handleTrial() {
    navigation.navigate('Sex');
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
        <SignBtn onPress={handleTrial}>
          <SignBtnText>Verificar minha saúde</SignBtnText>
        </SignBtn>
        <SignBtn background="#fff" onPress={handleSignIn}>
          <SignBtnText color="rgba(255, 0, 0, 0.7)">Entrar</SignBtnText>
        </SignBtn>
      </Panel>
    </Container>
  );
}

Sign.navigationOptions = {
  header: null,
};
