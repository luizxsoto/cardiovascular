/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* Types & Action Creators */
export const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signUpRequest: ['name', 'email', 'password', 'navigation'],
  signUpSuccess: [],
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

const signUpSuccess = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = false;
  });

const signFailure = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = false;
  });

const signOut = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.signed = false;
  });

/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_FAILURE]: signFailure,
  [Types.SIGN_OUT]: signOut,
});
