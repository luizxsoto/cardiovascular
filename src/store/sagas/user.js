import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { apiApp, apiUser } from '~/services/api';

import { Creators as UserCreators, Types as UserTypes } from '../ducks/user';

export function* sendQuizRequest({
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
}) {
  try {
    const response = yield call(apiApp.post, 'predict', {
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
    });

    const { probability } = response.data;
    const score = parseInt(probability[0][0] * 100, 10);

    yield put(UserCreators.sendQuizSuccess(score));
  } catch (err) {
    Alert.alert(
      'Falha ao tentar predizer',
      'Algo deu errado, tente mais tarde'
    );
    yield put(UserCreators.sendQuizFailure());
  }
}

export function* saveQuizRequest({
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
  score,
}) {
  try {
    yield call(apiUser.post, 'quiz', {
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
      score,
    });
    yield put(UserCreators.sendQuizSuccess());
    yield put(UserCreators.getQuizRequest());
  } catch (err) {
    Alert.alert(
      'Falha ao tentar salvar os dados',
      'Algo deu errado, tente mais tarde'
    );
    yield put(UserCreators.sendQuizFailure());
  }
}

export function* getQuizRequest() {
  try {
    const response = yield call(apiUser.get, 'getquiz');

    const quizList = response.data.quiz;

    yield put(UserCreators.getQuizSuccess(quizList));
  } catch (err) {
    Alert.alert(
      `Falha ao carregar a lista do banco - COD: ${err.response.status}`,
      'Algo deu errado, tente mais tarde'
    );
    yield put(UserCreators.sendQuizFailure());
  }
}

export default all([
  takeLatest(UserTypes.SEND_QUIZ_REQUEST, sendQuizRequest),
  takeLatest(UserTypes.SAVE_QUIZ_REQUEST, sendQuizRequest),
  takeLatest(UserTypes.GET_QUIZ_REQUEST, getQuizRequest),
]);
