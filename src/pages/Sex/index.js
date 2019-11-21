import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import masculino from '~/assets/images/masculino.png';
import feminino from '~/assets/images/feminino.png';

export default function Sex({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [gender, setGender] = useState();
  const [attention, setAttention] = useState(true);

  function handleSubmit(option) {
    setGender(option);
    dispatch(UserCreators.changeGender(Number(option)));
    navigation.navigate('Birthday');
  }

  return (
    <Container>
      {attention && (
        <Attention>
          <AttentionImage />
          <AttentionTitle>
            Olá, {user.user.name && user.user.name.split(' ', 1)[0]}!
          </AttentionTitle>
          <AttentionMessage>
            Nas próximas telas iremos fazer uma avaliação de sua saúde
            cardiovascular. Teremos três tipos de perguntas:
          </AttentionMessage>
          <AttentionMessage>Objetivas: Idade e peso</AttentionMessage>
          <AttentionMessage>Subjetivas: Hábitos pessoais</AttentionMessage>
          <AttentionMessage>
            Clínicas: Pressão, glicose e colesterol
          </AttentionMessage>
          <AttentionButton onPress={() => setAttention(false)}>
            <AttentionMessage>Vamos lá!</AttentionMessage>
          </AttentionButton>
        </Attention>
      )}
      <QuestionImage />
      <QuestionText>Seu sexo é?</QuestionText>
      <Panel>
        <PanelBtn checked={gender === 1} onPress={() => handleSubmit(1)}>
          <PanelImage source={feminino} />
          <PanelText>F</PanelText>
        </PanelBtn>
        <PanelText color>/</PanelText>
        <PanelBtn checked={gender === 2} onPress={() => handleSubmit(2)}>
          <PanelImage source={masculino} />
          <PanelText>M</PanelText>
        </PanelBtn>
      </Panel>
    </Container>
  );
}

Sex.navigationOptions = {
  title: 'Sobre você',
};
