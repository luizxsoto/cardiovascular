import React from 'react';

import {
  Container,
  Logo,
  LogoImage,
  LogoText,
  SignBtn,
  SignBtnText,
} from './styles';

export default function Sign() {
  return (
    <Container>
      <Logo>
        <LogoImage />
        <LogoText>Higia</LogoText>
      </Logo>
      <Logo>
        <SignBtn>
          <SignBtnText>Entrar</SignBtnText>
        </SignBtn>
        <SignBtn background="#fff">
          <SignBtnText color="rgba(255, 0, 0, 0.7)">Cadastrar</SignBtnText>
        </SignBtn>
      </Logo>
    </Container>
  );
}

Sign.navigationOptions = {
  header: null,
};
