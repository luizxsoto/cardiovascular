import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/pt-br';

import {
  Container,
  ScoreTitle,
  ScorePanel,
  ScorePoints,
  ScoreLabel,
  ResponsesPanel,
  PanelSeparator,
  ResponseText,
} from './styles';

export default function Quiz() {
  moment.locale('pt-br');
  const quiz = useSelector(state => state.user.quiz);

  function formatGlucChol(cholesterol) {
    switch (cholesterol) {
      case 1:
        return 'Normal';
      case 2:
        return 'Acima do normal';
      default:
        return 'Bem acima do normal';
    }
  }

  return (
    <Container>
      <ScoreTitle>Seu score foi:</ScoreTitle>
      <ScorePanel>
        <ScorePoints>{quiz.score}</ScorePoints>
        <ScoreLabel>pts</ScoreLabel>
      </ScorePanel>
      <ResponseText>Data: {moment(quiz.createdAt).format('ll')}</ResponseText>
      <ResponsesPanel>
        <PanelSeparator>
          <ResponseText>Idade: {parseInt(quiz.age / 365, 10)}</ResponseText>
          <ResponseText>
            Sexo: {quiz.gender === 1 ? 'Feminino' : 'Masculino'}
          </ResponseText>
          <ResponseText>Altura: {quiz.height}cm</ResponseText>
          <ResponseText>Peso: {quiz.weight}kg</ResponseText>
          <ResponseText>
            Pressão: {quiz.systolic / 10}/{quiz.diastolic / 10}
          </ResponseText>
        </PanelSeparator>
        <PanelSeparator>
          <ResponseText>
            Colesterol: {formatGlucChol(quiz.cholesterol)}
          </ResponseText>
          <ResponseText>Glicose: {formatGlucChol(quiz.gluc)}</ResponseText>
          <ResponseText>Fuma: {quiz.smoke ? 'Sim' : 'Não'}</ResponseText>
          <ResponseText>
            Consome álcool: {quiz.alco ? 'Sim' : 'Não'}
          </ResponseText>
          <ResponseText>
            Pratica exercícios: {quiz.active ? 'Sim' : 'Não'}
          </ResponseText>
        </PanelSeparator>
      </ResponsesPanel>
    </Container>
  );
}

Quiz.navigationOptions = {
  title: 'Score anterior',
};
