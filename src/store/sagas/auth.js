import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import apiAuth from '~/services/api';

import { Creators as AuthCreators, Types as AuthTypes } from '../ducks/auth';

export function* signIn({ login, password }) {
  try {
    yield call(apiAuth.post, 'login', {
      login,
      password,
    });

    yield put(AuthCreators.signInSuccess());
  } catch (err) {
    Alert.alert('Falha ao autenticar', `${err}`);
    yield put(AuthCreators.signFailure());
  }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)]);
