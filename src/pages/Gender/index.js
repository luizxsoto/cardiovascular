import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as UserCreators } from '~/store/ducks/user';

import {
  Container,
  Attention,
  AttentionImage,
  AttentionTitle,
  AttentionMessage,
  AttentionButton,
  QuestionImage,
  QuestionText,
  Panel,
  PanelBtn,
  PanelImage,
  PanelText,
} from './styles';

import adultoM from '~/assets/images/adultoM.png';
import adultoF from '~/assets/images/adultoF.png';

export default function Gender({ navigation }) {
  const dispatch = useDispatch();
  const [gender, setGender] = useState();
  const [attention, setAttention] = useState(true);

  function handleSubmit(option) {
    setGender(option);
    dispatch(UserCreators.changeGender(option));
    navigation.navigate('Age');
  }

  return (
    <Container>
      {attention && (
        <Attention>
          <AttentionImage />
          <AttentionTitle>Olá, Usuário!</AttentionTitle>
          <AttentionMessage>
            Nas próximas telas iremos fazer um avaliação da sua saúde
            cadiovascular. Teremos três tipos de perguntas:
          </AttentionMessage>
          <AttentionMessage>Objetivas: Idade e peso</AttentionMessage>
          <AttentionMessage>Subjetivas: Hábitos pessoais</AttentionMessage>
          <AttentionMessage>
            Clínicas: Pressão, glicose e colesterol
          </AttentionMessage>
          <AttentionButton onPress={() => setAttention(false)}>
            <AttentionMessage>Vamos lá?</AttentionMessage>
          </AttentionButton>
        </Attention>
      )}
      <QuestionImage />
      <QuestionText>Seu sexo é:</QuestionText>
      <Panel>
        <PanelBtn checked={gender === 1} onPress={() => handleSubmit(1)}>
          <PanelImage source={adultoF} />
          <PanelText>F</PanelText>
        </PanelBtn>
        <PanelText color>/</PanelText>
        <PanelBtn checked={gender === 2} onPress={() => handleSubmit(2)}>
          <PanelImage source={adultoM} />
          <PanelText>M</PanelText>
        </PanelBtn>
      </Panel>
    </Container>
  );
}

Gender.navigationOptions = {
  title: 'Sobre você',
};
