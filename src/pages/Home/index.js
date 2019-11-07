import React from 'react';
import { useDispatch } from 'react-redux';

import { Creators as AuthCreators } from '~/store/ducks/auth';

import { Container, ContainerText, ContainerBtn } from './styles';

export default function Home() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(AuthCreators.signOut());
  }

  return (
    <Container>
      <ContainerText>Logged !</ContainerText>
      <ContainerBtn onPress={() => handleSignOut()}>
        <ContainerText color>Sign Out</ContainerText>
      </ContainerBtn>
    </Container>
  );
}
