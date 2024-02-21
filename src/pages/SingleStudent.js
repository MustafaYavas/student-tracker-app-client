import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actionTypes from '../redux/actionTypes';
import Student from '../components/student/Student';

const SingleStudent = ({ singleStudent }) => {
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.SINGLE_STUDENT_REQUEST, payload: id });
  }, [dispatch, id]);

  return (
    <div className="container">
      <Student singleStudent={singleStudent} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    singleStudent: state.students.singleStudent,
  };
};

export default connect(mapStateToProps)(SingleStudent);
