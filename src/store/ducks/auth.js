/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* Types & Action Creators */
export const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signUpRequest: [
    'name',
    'email',
    'password',
    'age',
    'gender',
    'height',
    'weight',
    'systolic',
    'diastolic',
    'cholesterol',
    'gluc',
    'smoke',
    'alco',
    'active',
    'score',
  ],
  signFailure: [],
  signOut: [],
});

/* Initial State */
const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

/* Reducers handlers */
const signInRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = true;
  });

const signInSuccess = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.token = action.token;
    draft.signed = true;
    draft.loading = false;
  });

const signUpRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = true;
  });

const signFailure = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.token = null;
    draft.signed = false;
    draft.loading = false;
  });

const signOut = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.token = null;
    draft.signed = false;
    draft.loading = false;
  });

/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_FAILURE]: signFailure,
  [Types.SIGN_OUT]: signOut,
});
