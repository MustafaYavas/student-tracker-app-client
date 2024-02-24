import React from 'react';
import AddStudent from '../components/addStudent/AddStudent';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../redux/actionTypes';

const AddStudentPage = () => {
  const dispatch = useDispatch();

  /**
   *
   * @typedef {Object} newStudent
   * @property {string} firstName - first name
   * @property {string} lastName - last name
   * @property {string} email - email
   * @property {string} departments - departments
   */

  /** @param {newStudent} - params */
  const addStudent = (newStudent) => {
    dispatch({ type: actionTypes.STUDENT_ADD_REQUEST, payload: newStudent });
  };

  return <AddStudent addStudent={addStudent} />;
};

export default AddStudentPage;
