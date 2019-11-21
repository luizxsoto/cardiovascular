import React from 'react';

import { Container, Loading } from './styles';

export default function LoadingGif() {
  return (
    <Container>
      <Loading />
    </Container>
  );
}

LoadingGif.navigationOptions = {
  header: null,
};
