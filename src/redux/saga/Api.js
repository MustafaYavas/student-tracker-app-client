export const handleGetStudents = async () => {
  const response = await fetch('http://localhost:8080/api/students');
  const result = await response.json();
  return result;
};

export const handleGetStudent = async (id) => {
  const response = await fetch(`http://localhost:8080/api/students/${id}`);
  const result = await response.json();
  return result;
};

export const handleAddStudent = async (payload) => {
  const response = await fetch(`http://localhost:8080/api/students`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export const handleUpdateStudent = async (payload) => {
  const response = await fetch(
    `http://localhost:8080/api/students/update/${payload.id}`,
    {
      method: 'PUT',
      body: JSON.stringify(payload.updatedStudent),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );
  const result = await response.json();
  return result;
};

export const handleDeleteStudent = async (id) => {
  await fetch(`http://localhost:8080/api/students/${id}`, {
    method: 'DELETE',
  });
};
