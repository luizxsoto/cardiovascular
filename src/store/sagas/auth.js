import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { apiUser } from '~/services/api';

import { Creators as AuthCreators, Types as AuthTypes } from '../ducks/auth';
import { Creators as UserCreators } from '../ducks/user';

export function* signInRequest({ email, password }) {
  try {
    const response = yield call(apiUser.post, 'sessions', {
      email,
      password,
    });

    const { user, token } = response.data;

    apiUser.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(UserCreators.changeUser(user));
    yield put(AuthCreators.signInSuccess(token));
  } catch (err) {
    if (err.response.status === 401) {
      Alert.alert(
        `Falha ao entrar - COD: ${err.response.status}`,
        `${err.response.data.error}`
      );
    } else {
      Alert.alert(
        `Falha ao entrar - COD: ${err.response.status}`,
        `Algo deu errado, tente novamente mais tarde`
      );
    }
    yield put(AuthCreators.signFailure());
  }
}

export function* signUpRequest({
  name,
  email,
  password,
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
    const idade = age;
    const sexo = gender;
    yield call(apiUser.post, 'users', {
      name,
      email,
      idade,
      sexo,
      password,
    });

    const sessions = yield call(apiUser.post, 'sessions', {
      email,
      password,
    });

    const { user, token } = sessions.data;

    apiUser.defaults.headers.Authorization = `Bearer ${token}`;

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

    yield put(UserCreators.changeUser(user));
    yield put(AuthCreators.signInSuccess(token));
    Alert.alert('Cadastro realizado', 'Usuário cadastrado com sucesso!');
  } catch (err) {
    if (err.response.status === 400) {
      Alert.alert(
        `Falha ao cadastrar - COD: ${err.response.status}`,
        `${err.response.data.error}`
      );
    } else {
      Alert.alert(
        `Falha ao cadastrar - COD: ${err.response.status}`,
        `${err.response.data.error}`
      );
    }
    yield put(AuthCreators.signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    apiUser.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signInRequest),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, signUpRequest),
]);
