import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/pt-br';

import { Creators as AuthCreators } from '~/store/ducks/auth';
import { Creators as UserCreators } from '~/store/ducks/user';

import LoadingGif from '~/components/LoadingGif';
import {
  Container,
  BestScoreBtn,
  BestScoreBtnText,
  BestScore,
  BestScoreSeparator,
  BestScoreLabel,
  BestScoreValue,
  UserInfo,
  UserNameLabel,
  UserNameValue,
  ListQuiz,
  ItemQuiz,
  ItemText,
} from './styles';

export default function Home({ navigation }) {
  moment.locale('pt-br');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);
  const user = useSelector(state => state.user);
  const [maxScore, setMaxtScore] = useState(0);

  useEffect(() => {
    dispatch(UserCreators.getQuizRequest());
  }, []);

  useEffect(() => {
    setMaxtScore(Math.max(...user.quizList.map(item => item.score)));
  }, [user]);

  function handleSignOut() {
    dispatch(AuthCreators.signOut());
    dispatch(UserCreators.clearUser());
  }

  function handleChangeQuiz(quiz) {
    dispatch(UserCreators.changeQuiz(quiz));
    navigation.navigate('Quiz');
  }

  return (
    <>
      {loading ? (
        <LoadingGif />
      ) : (
        <Container>
          <BestScore>
            <BestScoreBtn color onPress={() => navigation.navigate('Height')}>
              <BestScoreBtnText>Novo checkup</BestScoreBtnText>
            </BestScoreBtn>
            <BestScoreSeparator>
              <BestScoreLabel>Meu melhor score:</BestScoreLabel>
              <BestScoreValue>{maxScore} pts</BestScoreValue>
            </BestScoreSeparator>
            <BestScoreBtn onPress={() => handleSignOut()}>
              <BestScoreBtnText>Sair</BestScoreBtnText>
            </BestScoreBtn>
          </BestScore>
          <UserInfo>
            <UserNameLabel>Olá,</UserNameLabel>
            <UserNameValue>{user.user.name}</UserNameValue>
          </UserInfo>
          {user.quizList && (
            <ListQuiz
              data={user.quizList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <ItemQuiz onPress={() => handleChangeQuiz(item)}>
                  {console.tron.log(item)}
                  <ItemText>Score: {item.score} pts</ItemText>
                  <ItemText>
                    Data: {moment(item.createdAt).format('ll')}
                  </ItemText>
                </ItemQuiz>
              )}
            />
          )}
        </Container>
      )}
    </>
  );
}

Home.navigationOptions = {
  header: null,
};
