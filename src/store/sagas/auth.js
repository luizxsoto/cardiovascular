import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { apiUser } from '~/services/api';

import { Creators as AuthCreators, Types as AuthTypes } from '../ducks/auth';
import { Creators as UserCreators } from '../ducks/user';

export function* signIn({ email, password }) {
  try {
    const response = yield call(apiUser.post, 'sessions', {
      email,
      password,
    });

    const { user, token } = response.data;

    yield put(UserCreators.changeUser(user));
    yield put(AuthCreators.signInSuccess(token));
  } catch (err) {
    Alert.alert('Falha ao autenticar', `${err}`);
    yield put(AuthCreators.signFailure());
  }
}

export function* signUp({ name, email, password, navigation }) {
  try {
    yield call(apiUser.post, 'users', {
      name,
      email,
      password,
    });

    yield put(AuthCreators.signUpSuccess());
    Alert.alert('Cadastro realizado', 'Usuário cadastrado com sucesso!');
    navigation.navigate('SignIn');
  } catch (err) {
    Alert.alert('Falha ao cadastrar', `${err.response}`);
    yield put(AuthCreators.signFailure());
  }
}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
]);
