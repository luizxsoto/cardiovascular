import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as UserCreators } from '~/store/ducks/user';

import normal from '~/assets/images/normal.png';
import acimaNormal from '~/assets/images/acimaNormal.png';
import bemAcimaNormal from '~/assets/images/bemAcimaNormal.png';
import {
  Container,
  Attention,
  AttentionImage,
  AttentionTitle,
  AttentionMessage,
  AttentionButton,
  Panel,
  CholesterolImage,
  CholesterolText,
} from './styles';

export default function Cholesterol({ navigation }) {
  const dispatch = useDispatch();
  const [attention, setAttention] = useState(true);

  function handleSubmit(response) {
    dispatch(UserCreators.changeCholesterol(response));
    navigation.navigate('Gluc');
  }

  return (
    <Container>
      {attention && (
        <Attention>
          <AttentionImage />
          <AttentionTitle>Atenção, Usuario!</AttentionTitle>
          <AttentionMessage>
            As repostas a seguir exigem que você tenha embaseamento clínico
            realizado por examaes periódicos e com avaliação médica. Informações
            imprecisas tornarão seu teste imprecioso.
          </AttentionMessage>
          <AttentionButton onPress={() => setAttention(false)}>
            <AttentionMessage>Ciente!</AttentionMessage>
          </AttentionButton>
        </Attention>
      )}
      <Panel onPress={() => handleSubmit(1)}>
        <CholesterolImage source={normal} />
        <CholesterolText>Normal</CholesterolText>
      </Panel>
      <Panel onPress={() => handleSubmit(2)}>
        <CholesterolImage source={acimaNormal} />
        <CholesterolText>Acima do normal</CholesterolText>
      </Panel>
      <Panel onPress={() => handleSubmit(3)}>
        <CholesterolImage source={bemAcimaNormal} />
        <CholesterolText>Bem acima do normal</CholesterolText>
      </Panel>
    </Container>
  );
}

Cholesterol.navigationOptions = {
  title: 'Colesterol',
};
