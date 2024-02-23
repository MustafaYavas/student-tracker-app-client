import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddStudent = ({ addStudent }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [departments, setDepartments] = useState('');
  const [error, setError] = useState(false);

  const handleAddStudent = () => {
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
    const newStudent = {
      firstName,
      lastName,
      email,
      departments,
    };

    addStudent(newStudent);
    setFirstName('');
    setLastName('');
    setEmail('');
    setDepartments('');
  };

  return (
    <div className="w-50">
      <p class="fs-3 text-decoration-underline">Add Student</p>
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

      <Button variant="primary" onClick={handleAddStudent}>
        Add
      </Button>
      {error && (
        <small className="text-danger ms-3">
          Inputs can not be left blank!
        </small>
      )}
    </div>
  );
};

export default AddStudent;
