import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../redux/actionTypes';

const UpdateStudent = ({ singleStudent }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [departments, setDepartments] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(singleStudent).length > 0) {
      setFirstName(singleStudent.firstName);
      setLastName(singleStudent.lastName);
      setEmail(singleStudent.email);
      setDepartments(singleStudent.departments);
    }
  }, [singleStudent]);

  const handleSubmit = () => {
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      departments === ''
    ) {
      setError(true);
      return;
    }

    setError(false);
    const updatedStudent = {
      firstName,
      lastName,
      email,
      departments,
    };

    dispatch({
      type: actionTypes.STUDENT_UPDATE_REQUEST,
      payload: { id: singleStudent.id, updatedStudent },
    });
  };

  return (
    <div className="w-50">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Departments</Form.Label>
          <Form.Control
            type="text"
            placeholder="Departments"
            value={departments}
            onChange={(e) => setDepartments(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
      {error && (
        <small className="text-danger ms-3">
          Inputs can not be left blank!
        </small>
      )}
    </div>
  );
};

export default UpdateStudent;
