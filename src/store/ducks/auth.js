/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* Types & Action Creators */
export const { Types, Creators } = createActions({
  signInRequest: ['login', 'password'],
  signInSuccess: [],
  signFailure: [],
  signOut: [],
});

/* Initial State */
const INITIAL_STATE = {
  login: null,
  password: null,
  signed: false,
  loading: false,
};

/* Reducers handlers */
const signInRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    // draft.loading = true;
    draft.signed = true;
  });

const signInSuccess = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.login = action.login;
    draft.password = action.password;
    draft.signed = true;
    draft.loading = false;
  });

const signFailure = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.login = null;
    draft.password = null;
    draft.loading = false;
  });

const signOut = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.login = null;
    draft.password = null;
    draft.signed = false;
  });

/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_FAILURE]: signFailure,
  [Types.SIGN_OUT]: signOut,
});
