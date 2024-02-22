import React, { useEffect } from 'react';
import UpdateStudent from '../components/updateStudent/UpdateStudent';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import * as actionTypes from '../redux/actionTypes';

const UpdateStudentPage = ({ singleStudent }) => {
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(singleStudent).length === 0)
      dispatch({ type: actionTypes.SINGLE_STUDENT_REQUEST, payload: id });
  }, [dispatch, id]);

  return <UpdateStudent singleStudent={singleStudent} />;
};

const mapStateToProps = (state) => {
  return {
    singleStudent: state.students.singleStudent,
  };
};

export default connect(mapStateToProps)(UpdateStudentPage);
