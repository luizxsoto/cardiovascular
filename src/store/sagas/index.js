import { all, takeEvery } from 'redux-saga/effects';

import { Types as authTypes } from '../ducks/auth';
import { signIn } from './auth';

export default function* rootSaga() {
  return yield all([takeEvery(authTypes.SIGN_IN_REQUEST, signIn)]);
}
