/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* Types & Action Creators */
export const { Types, Creators } = createActions({
  changeUser: ['user'],
  changeQuiz: ['quiz'],
  clearUser: [],
  sendQuizRequest: [
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
  ],
  sendQuizSuccess: ['score'],
  sendQuizFailure: [],
  saveQuizRequest: [
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
  saveQuizSuccess: ['score'],
  saveQuizFailure: [],
  getQuizRequest: [],
  getQuizSuccess: ['quizList'],
  getQuizFailure: [],
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
  loading: false,
  user: null,
  quizList: null,
  quiz: null,
  score: 0,
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

const changeQuiz = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.quiz = action.quiz;
  });

const clearUser = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.user = null;
    draft.quizList = null;
    draft.quiz = null;
    draft.score = 0;
    draft.age = -1;
    draft.gender = -1;
    draft.height = -1;
    draft.weight = -1;
    draft.systolic = -1;
    draft.diastolic = -1;
    draft.cholesterol = -1;
    draft.gluc = -1;
    draft.smoke = -1;
    draft.alco = -1;
    draft.active = -1;
  });

const sendQuizRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = true;
  });

const sendQuizSuccess = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.score = action.score;
    draft.loading = false;
  });

const sendQuizFailure = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = false;
  });

const saveQuizRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = true;
  });

const saveQuizSuccess = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = false;
  });

const saveQuizFailure = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = false;
  });

const getQuizRequest = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = true;
  });

const getQuizSuccess = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.quizList = action.quizList;
    draft.loading = false;
  });

const getQuizFailure = (state = INITIAL_STATE) =>
  produce(state, draft => {
    draft.loading = false;
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
  [Types.CHANGE_QUIZ]: changeQuiz,
  [Types.CLEAR_USER]: clearUser,
  [Types.SEND_QUIZ_REQUEST]: sendQuizRequest,
  [Types.SEND_QUIZ_SUCCESS]: sendQuizSuccess,
  [Types.SEND_QUIZ_FAILURE]: sendQuizFailure,
  [Types.SAVE_QUIZ_REQUEST]: saveQuizRequest,
  [Types.SAVE_QUIZ_SUCCESS]: saveQuizSuccess,
  [Types.SAVE_QUIZ_FAILURE]: saveQuizFailure,
  [Types.GET_QUIZ_REQUEST]: getQuizRequest,
  [Types.GET_QUIZ_SUCCESS]: getQuizSuccess,
  [Types.GET_QUIZ_FAILURE]: getQuizFailure,
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
