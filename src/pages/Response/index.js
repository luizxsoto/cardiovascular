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
  NextButton,
  NextText,
} from './styles';

export default function Response({ navigation }) {
  const [score, setScore] = useState('...');
  const user = useSelector(state => state.user);
  const [title, setTitle] = useState('Carregando...');
  const [message, setMessage] = useState('Carregando...');

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
            user.age,
            user.gender,
            user.height,
            user.weight,
            user.systolic,
            user.diastolic,
            user.cholesterol,
            user.gluc,
            user.smoke,
            user.alco,
            user.active,
          ],
        })
        .then(res => setScore(parseInt(res.data.probability[0][0] * 100, 10)))
        .catch(err => Alert.alert('Erro', `${err}`));
    }

    callApi();
  }, []);

  useEffect(() => {
    if (score >= 81) {
      setTitle(messages[0].title);
      setMessage(messages[0].message);
    }
    if (score >= 61 && score <= 80) {
      setTitle(messages[1].title);
      setMessage(messages[1].message);
    }
    if (score >= 41 && score <= 60) {
      setTitle(messages[2].title);
      setMessage(messages[2].message);
    }
    if (score >= 21 && score <= 40) {
      setTitle(messages[3].title);
    }
    if (score >= 1 && score <= 20) {
      setTitle(messages[4].title);
      setMessage(messages[4].message);
    }
  }, [score]);

  return (
    <Container>
      <ScoreTitle>Seu score é:</ScoreTitle>
      <ScorePanel>
        <ScorePoints>{score}</ScorePoints>
        <ScoreLabel>pts</ScoreLabel>
      </ScorePanel>
      <ScoreMessageTitle>{title}</ScoreMessageTitle>
      <ScoreMessage>{message}</ScoreMessage>
      <AdviceMessage>Algo está atrapalhando seu score!</AdviceMessage>
      <AdviceMessage>Se você o evitasse, seu score seria de:</AdviceMessage>
      <RowPanel>
        <NextButton disp />
        <BetterScorePanel>
          <BetterScorePoints>100</BetterScorePoints>
          <BetterScoreLabel>pts</BetterScoreLabel>
        </BetterScorePanel>
        <NextButton onPress={() => navigation.navigate('SignUp')}>
          <NextText>Saiba mais sobre seu SCORE!</NextText>
        </NextButton>
      </RowPanel>
    </Container>
  );
}

Response.navigationOptions = {
  title: 'Seu resultado',
};
