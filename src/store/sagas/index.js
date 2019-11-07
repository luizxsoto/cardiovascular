import { all, takeEvery } from 'redux-saga/effects';

import { Types as authTypes } from '../ducks/auth';
import { signIn, signUp } from './auth';

export default function* rootSaga() {
  return yield all([
    takeEvery(authTypes.SIGN_IN_REQUEST, signIn),
    takeEvery(authTypes.SIGN_UP_REQUEST, signUp),
  ]);
}
