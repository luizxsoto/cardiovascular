import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Creators as AuthCreators } from '~/store/ducks/auth';
import { Creators as UserCreators } from '~/store/ducks/user';

import LoadingGif from '~/components/LoadingGif';
import {
  Container,
  BackBtn,
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
  const dispatch = useDispatch();
  const signed = useSelector(state => state.auth.signed);
  const user = useSelector(state => state.user);
  const score = useSelector(state => state.user.score);
  const loading = useSelector(state => state.user.loading);
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

  function handleRestart() {
    if (signed) {
      navigation.navigate('Height');
    } else {
      dispatch(AuthCreators.signOut());
      dispatch(UserCreators.clearUser());
      navigation.navigate('Sign');
    }
  }

  function callApiUser() {
    dispatch(
      UserCreators.saveQuizRequest(
        user.user.idade,
        user.user.sexo,
        user.height,
        user.weight,
        user.systolic,
        user.diastolic,
        user.cholesterol,
        user.gluc,
        user.smoke,
        user.alco,
        user.active,
        user.score
      )
    );
    navigation.navigate('Home');
  }

  useEffect(() => {
    function callApiApp() {
      if (signed) {
        dispatch(
          UserCreators.sendQuizRequest(
            user.user.idade,
            user.user.sexo,
            user.height,
            user.weight,
            user.systolic,
            user.diastolic,
            user.cholesterol,
            user.gluc,
            user.smoke,
            user.alco,
            user.active
          )
        );
      } else {
        dispatch(
          UserCreators.sendQuizRequest(
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
            user.active
          )
        );
      }
    }

    callApiApp();
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
    <>
      {loading ? (
        <LoadingGif />
      ) : (
        <Container>
          <BackBtn onPress={() => handleRestart()}>
            <Icon name="reload" size={40} color="#f95f62" />
          </BackBtn>
          <ScoreTitle>Seu score é:</ScoreTitle>
          <ScorePanel>
            <ScorePoints>{score || '...'}</ScorePoints>
            <ScoreLabel>pts</ScoreLabel>
          </ScorePanel>
          <ScoreMessageTitle>{title}</ScoreMessageTitle>
          <ScoreMessage>{message}</ScoreMessage>
          {score !== '...' && (
            <>
              <AdviceMessage>Algo está atrapalhando seu score!</AdviceMessage>
              <AdviceMessage>
                Se você o evitasse, seu score seria de:
              </AdviceMessage>
              <RowPanel>
                <NextButton disp />
                <BetterScorePanel>
                  <BetterScorePoints>100</BetterScorePoints>
                  <BetterScoreLabel>pts</BetterScoreLabel>
                </BetterScorePanel>
                {signed ? (
                  <NextButton onPress={() => callApiUser()}>
                    <NextText>Enviar e voltar para HOME!</NextText>
                  </NextButton>
                ) : (
                  <NextButton onPress={() => navigation.navigate('SignUp')}>
                    <NextText>Saiba mais sobre seu SCORE!</NextText>
                  </NextButton>
                )}
              </RowPanel>
            </>
          )}
        </Container>
      )}
    </>
  );
}

Response.navigationOptions = {
  header: null,
};
