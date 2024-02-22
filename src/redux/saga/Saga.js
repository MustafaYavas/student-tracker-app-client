import * as actionTypes from '../actionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  handleDeleteStudent,
  handleGetStudent,
  handleGetStudents,
  handleUpdateStudent,
} from './Api';

const actionData = function (type, payload) {
  return { type, payload };
};

export const getAllStudents = function* () {
  try {
    const data = yield call(handleGetStudents);
    yield put(actionData(actionTypes.ALL_STUDENTS_DATA, data));
  } catch (error) {
    yield put(actionData(actionTypes.ALL_STUDENTS_ERROR, error));
  }
};

export const getSingleStudent = function* ({ payload }) {
  try {
    const data = yield call(handleGetStudent, payload);
    yield put(actionData(actionTypes.SINGLE_STUDENT_DATA, data));
  } catch (error) {
    yield put(actionData(actionTypes.SINGLE_STUDENT_ERROR, error));
  }
};

export const updateStudent = function* ({ payload }) {
  try {
    const data = yield call(handleUpdateStudent, payload);
    yield put(actionData(actionTypes.STUDENT_UPDATE_DATA, data));
  } catch (error) {
    yield put(actionData(actionTypes.STUDENT_UPDATE_ERROR, error));
  }
};

export const deleteStudent = function* ({ payload }) {
  try {
    yield call(handleDeleteStudent, payload);
    yield put(actionData(actionTypes.STUDENT_DELETE_DATA, payload));
  } catch (error) {
    yield put(actionData(actionTypes.STUDENT_DELETE_ERROR, error));
  }
};

const Saga = function* () {
  yield takeLatest(actionTypes.ALL_STUDENTS_REQUEST, getAllStudents);
  yield takeLatest(actionTypes.SINGLE_STUDENT_REQUEST, getSingleStudent);
  yield takeLatest(actionTypes.STUDENT_UPDATE_REQUEST, updateStudent);
  yield takeLatest(actionTypes.STUDENT_DELETE_REQUEST, deleteStudent);
};

export default Saga;
