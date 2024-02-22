export const handleGetStudents = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/students');
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const handleGetStudent = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/students/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const handleUpdateStudent = async (payload) => {
  try {
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
  } catch (error) {
    throw new Error(error);
  }
};
