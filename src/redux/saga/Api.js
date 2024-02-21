export const handleGetStudents = async () => {
  const response = await fetch('http://localhost:8080/api/students');
  const result = await response.json();
  return result;
};
