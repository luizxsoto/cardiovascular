/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* Types & Action Creators */
export const { Types, Creators } = createActions({
  changeUser: ['user'],
  changeAge: ['answer'],
  changeGender: ['answer'],
  changeHeight: ['answer'],
  changeWeight: ['answer'],
  changeSystolic: ['answer'],
  changeDiastolic: ['answer'],
  changeCholesterol: ['answer'],
  changeGluc: ['answer'],
  changeSmoke: ['answer'],
  changeAlco: ['answer'],
  changeActive: ['answer'],
});

/* Initial State */
const INITIAL_STATE = {
  user: null,
  age: -1,
  gender: -1,
  height: -1,
  weight: -1,
  systolic: -1,
  diastolic: -1,
  cholesterol: -1,
  gluc: -1,
  smoke: -1,
  alco: -1,
  active: -1,
};

/* Reducers handlers */
const changeUser = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.user = action.user;
  });

const changeAge = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.age = action.answer;
  });

const changeGender = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.gender = action.answer;
  });

const changeHeight = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.height = action.answer;
  });

const changeWeight = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.weight = action.answer;
  });

const changeSystolic = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.systolic = action.answer;
  });

const changeDiastolic = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.diastolic = action.answer;
  });

const changeCholesterol = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.cholesterol = action.answer;
  });

const changeGluc = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.gluc = action.answer;
  });

const changeSmoke = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.smoke = action.answer;
  });

const changeAlco = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.alco = action.answer;
  });

const changeActive = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.active = action.answer;
  });

/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_USER]: changeUser,
  [Types.CHANGE_AGE]: changeAge,
  [Types.CHANGE_GENDER]: changeGender,
  [Types.CHANGE_HEIGHT]: changeHeight,
  [Types.CHANGE_WEIGHT]: changeWeight,
  [Types.CHANGE_SYSTOLIC]: changeSystolic,
  [Types.CHANGE_DIASTOLIC]: changeDiastolic,
  [Types.CHANGE_CHOLESTEROL]: changeCholesterol,
  [Types.CHANGE_GLUC]: changeGluc,
  [Types.CHANGE_SMOKE]: changeSmoke,
  [Types.CHANGE_ALCO]: changeAlco,
  [Types.CHANGE_ACTIVE]: changeActive,
});
