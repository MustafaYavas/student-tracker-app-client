import * as actionTypes from '../actionTypes';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  handleAddStudent,
  handleDeleteStudent,
  handleGetStudent,
  handleGetStudents,
  handleUpdateStudent,
} from './Api';
import { toast } from 'react-toastify';

const showToastMessage = (type, message) => {
  if (type === 'success') {
    toast.success(message, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  } else {
    toast.error(message, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }
};

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
    showToastMessage('success', 'Student successfully updated!');
  } catch (error) {
    yield put(actionData(actionTypes.STUDENT_UPDATE_ERROR, error));
    showToastMessage(
      'fail',
      'An error has been occurred while updating the student!'
    );
  }
};

export const deleteStudent = function* ({ payload }) {
  try {
    yield call(handleDeleteStudent, payload);
    yield put(actionData(actionTypes.STUDENT_DELETE_DATA, payload));
    showToastMessage('success', 'Student successfully deleted!');
  } catch (error) {
    yield put(actionData(actionTypes.STUDENT_DELETE_ERROR, error));
    showToastMessage(
      'fail',
      'An error has been occurred while deleting the student!'
    );
  }
};

export const addStudent = function* ({ payload }) {
  try {
    yield call(handleAddStudent, payload);
    yield put(actionData(actionTypes.STUDENT_ADD_DATA, payload));
    showToastMessage('success', 'Student successfully added!');
  } catch (error) {
    yield put(actionData(actionTypes.STUDENT_ADD_ERROR, error));
    showToastMessage(
      'fail',
      'An error has been occurred while adding the student!'
    );
  }
};

const Saga = function* () {
  yield takeLatest(actionTypes.ALL_STUDENTS_REQUEST, getAllStudents);
  yield takeLatest(actionTypes.SINGLE_STUDENT_REQUEST, getSingleStudent);
  yield takeLatest(actionTypes.STUDENT_ADD_REQUEST, addStudent);
  yield takeLatest(actionTypes.STUDENT_UPDATE_REQUEST, updateStudent);
  yield takeLatest(actionTypes.STUDENT_DELETE_REQUEST, deleteStudent);
};

export default Saga;
