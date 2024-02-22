import * as actionTypes from '../actionTypes';

const initialState = {
  allStudents: [],
  singleStudent: {},
  error: null,
};

export const StudentsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === actionTypes.ALL_STUDENTS_DATA) {
    return {
      ...state,
      allStudents: payload,
    };
  } else if (type === actionTypes.ALL_STUDENTS_ERROR) {
    return {
      ...state,
      error: payload,
    };
  } else if (type === actionTypes.SINGLE_STUDENT_DATA) {
    return {
      ...state,
      singleStudent: payload,
    };
  } else if (type === actionTypes.SINGLE_STUDENT_ERROR) {
    return {
      ...state,
      error: payload,
    };
  } else if (type === actionTypes.STUDENT_UPDATE_DATA) {
    let newStudents = state.allStudents.map((student) =>
      student.id === payload.id ? { ...state.allStudents, ...payload } : student
    );

    return {
      ...state,
      allStudents: newStudents,
    };
  } else if (type === actionTypes.STUDENT_UPDATE_ERROR) {
    return {
      ...state,
      error: payload,
    };
  } else if (type === actionTypes.STUDENT_DELETE_DATA) {
    let newStudents = state.allStudents.filter(
      (student) => student.id !== payload
    );

    return {
      ...state,
      allStudents: newStudents,
    };
  } else if (type === actionTypes.STUDENT_DELETE_ERROR) {
    return {
      ...state,
      error: payload,
    };
  } else {
    return state;
  }
};

export default StudentsReducer;
