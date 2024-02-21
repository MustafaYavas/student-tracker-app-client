import { Table, Button } from 'react-bootstrap';
import styles from './StudentsTable.module.scss';
import { NavLink } from 'react-router-dom';

const StudentsTable = ({ students }) => {
  return (
    <div className={styles.students}>
      {students?.length === 0 ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3>No Students found!</h3>
          <Button className="mt-3 px-5">Add</Button>
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
                    <NavLink
                      title="Delete student"
                      className={`${styles['table-actions-button']} ${styles.delete}`}
                    >
                      Delete
                    </NavLink>
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
