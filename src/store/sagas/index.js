import { all, takeEvery } from 'redux-saga/effects';

import { Types as AuthTypes } from '../ducks/auth';
import { signInRequest, signUpRequest, setToken } from './auth';
import { Types as UserTypes } from '../ducks/user';
import { sendQuizRequest, saveQuizRequest, getQuizRequest } from './user';

export default function* rootSaga() {
  return yield all([
    takeEvery('persist/REHYDRATE', setToken),
    takeEvery(AuthTypes.SIGN_IN_REQUEST, signInRequest),
    takeEvery(AuthTypes.SIGN_UP_REQUEST, signUpRequest),
    takeEvery(UserTypes.SEND_QUIZ_REQUEST, sendQuizRequest),
    takeEvery(UserTypes.SAVE_QUIZ_REQUEST, saveQuizRequest),
    takeEvery(UserTypes.GET_QUIZ_REQUEST, getQuizRequest),
  ]);
}
