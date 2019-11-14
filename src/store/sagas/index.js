import { all, takeEvery } from 'redux-saga/effects';

import { Types as authTypes } from '../ducks/auth';
import { signInRequest, signUpRequest } from './auth';

export default function* rootSaga() {
  return yield all([
    takeEvery(authTypes.SIGN_IN_REQUEST, signInRequest),
    takeEvery(authTypes.SIGN_UP_REQUEST, signUpRequest),
  ]);
}
