import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { apiApp } from '~/services/api';

import {
  Container,
  ScoreTitle,
  ScorePanel,
  ScorePoints,
  ScoreLabel,
  ScoreMessageTitle,
  ScoreMessage,
  AdviceMessage,
  RowPanel,
  BetterScorePanel,
  BetterScorePoints,
  BetterScoreLabel,
  AgainButton,
} from './styles';

export default function Response({ navigation }) {
  const [score, setScore] = useState(0);
  const age = useSelector(state => state.user.age);
  const gender = useSelector(state => state.user.gender);
  const height = useSelector(state => state.user.height);
  const weight = useSelector(state => state.user.weight);
  const systolic = useSelector(state => state.user.systolic);
  const diastolic = useSelector(state => state.user.diastolic);
  const cholesterol = useSelector(state => state.user.cholesterol);
  const gluc = useSelector(state => state.user.gluc);
  const smoke = useSelector(state => state.user.smoke);
  const alco = useSelector(state => state.user.alco);
  const active = useSelector(state => state.user.active);

  const messages = [
    {
      title: 'Meus parabéns!',
      message:
        'Sua saúde cardiovascular é excelente. Você possui bons hábitos e é fundamental mantê-los.',
    },
    {
      title: 'Opa!',
      message:
        'Você está no caminho certo para a saúde cardiovascular. Entretanto você poderia melhorar alguns hábitos.',
    },
    {
      title: 'Ops!',
      message:
        'Apesar de possuir bons hábitos, você precisar melhorar e cuidar de sua saúde cardiovascular.',
    },
    {
      title: 'Hmm!',
      message:
        'Você possui tendência a ter problemas cardíacos. Por isso, é importante rever seus hábitos e realizar um check up médico.',
    },
    {
      title: 'Ixi!',
      message:
        'Você possui alto risco de desenvolver problemas cardíacos. Realize um check up médico assim que possível.',
    },
  ];

  useEffect(() => {
    async function callApi() {
      await apiApp
        .post('/predict', {
          features: [
            age,
            gender,
            height,
            weight,
            systolic,
            diastolic,
            cholesterol,
            gluc,
            smoke,
            alco,
            active,
          ],
        })
        .then(res => setScore(parseInt(res.data.probability[0][0] * 100, 10)))
        .catch(err => Alert.alert('Erro', `${err}`));
    }

    callApi();
  }, []);

  function renderTitle() {
    if (score >= 81) {
      return messages[0].title;
    }
    if (score >= 61 && score <= 80) {
      return messages[1].title;
    }
    if (score >= 41 && score <= 60) {
      return messages[2].title;
    }
    if (score >= 21 && score <= 40) {
      return messages[3].title;
    }
    if (score >= 1 && score <= 20) {
      return messages[4].title;
    }
    return 'Carregando...';
  }

  function renderMessage() {
    if (score >= 81) {
      return messages[0].message;
    }
    if (score >= 61 && score <= 80) {
      return messages[1].message;
    }
    if (score >= 41 && score <= 60) {
      return messages[2].message;
    }
    if (score >= 21 && score <= 40) {
      return messages[3].message;
    }
    if (score >= 1 && score <= 20) {
      return messages[4].message;
    }
    return 'Carregando...';
  }

  return (
    <Container>
      <ScoreTitle>Seu score é:</ScoreTitle>
      <ScorePanel>
        <ScorePoints>{score}</ScorePoints>
        <ScoreLabel>pts</ScoreLabel>
      </ScorePanel>
      <ScoreMessageTitle>{renderTitle()}</ScoreMessageTitle>
      <ScoreMessage>{renderMessage()}</ScoreMessage>
      <AdviceMessage>Algo está atrapalhando seu score!</AdviceMessage>
      <AdviceMessage>Se você o evitasse, seu score seria de:</AdviceMessage>
      <RowPanel>
        <BetterScorePanel disp />
        <BetterScorePanel>
          <BetterScorePoints>100</BetterScorePoints>
          <BetterScoreLabel>pts</BetterScoreLabel>
        </BetterScorePanel>
        <AgainButton onPress={() => navigation.navigate('Sign')}>
          <Icon name="reload" size={30} color="#fff" />
        </AgainButton>
      </RowPanel>
    </Container>
  );
}

Response.navigationOptions = {
  title: 'Seu resultado',
};
