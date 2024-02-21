import * as actionTypes from '../actionTypes';

const initialState = {
  allStudents: [],
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
  } else {
    return state;
  }
};

export default StudentsReducer;
