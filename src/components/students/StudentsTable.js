import React from 'react';

const StudentsTable = ({ students }) => {
  return (
    <>
      {students?.length === 0 ? (
        <p>Students not found</p>
      ) : (
        <section>
          <table>
            <thead>
              <tr>
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
                  <td>View</td>
                  <td>Update</td>
                  <td>Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
};

export default StudentsTable;
