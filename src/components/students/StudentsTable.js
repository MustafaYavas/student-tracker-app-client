import { Table } from 'react-bootstrap';
import styles from './StudentsTable.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../redux/actionTypes';

const StudentsTable = ({ students }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: actionTypes.STUDENT_DELETE_REQUEST, payload: id });
  };

  return (
    <div className={styles.students}>
      {students?.length === 0 ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3>No Students found!</h3>
          <NavLink className={`${styles.add} mt-5`} to="/students/add">
            Add a student
          </NavLink>
        </div>
      ) : (
        <section>
          <Table striped bordered hover responsive size="">
            <thead>
              <tr className="text-center">
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {students?.map((student, index) => (
                <tr key={student.id}>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.departments}</td>
                  <td
                    className={`d-flex align-items-center ${styles['table-actions']}`}
                  >
                    <NavLink
                      title="View student"
                      className={`${styles['table-actions-button']} ${styles.view}`}
                      to={`/students/${student.id}`}
                    >
                      View
                    </NavLink>
                    <NavLink
                      title="Update student"
                      className={`${styles['table-actions-button']} ${styles.update} mx-3`}
                      to={`/students/update/${student.id}`}
                    >
                      Update
                    </NavLink>
                    <button
                      title="Delete student"
                      className={`${styles['table-actions-button']} ${styles.delete}`}
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      )}
    </div>
  );
};

export default StudentsTable;
