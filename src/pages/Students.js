import React, { useEffect } from 'react';
import StudentsTable from '../components/students/StudentsTable';
import { connect, useDispatch } from 'react-redux';
import * as actionTypes from '../redux/actionTypes';

const Students = ({ students }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.ALL_STUDENTS_REQUEST });
  }, [dispatch]);

  return <StudentsTable students={students} />;
};

const mapStateToProps = (state) => {
  return {
    students: state.students.allStudents,
  };
};

export default connect(mapStateToProps)(Students);
