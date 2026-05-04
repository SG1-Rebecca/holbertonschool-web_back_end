export default function getStudentsByLocation(students, city) {
  // Filter students by location using the filter method
  return students.filter((student) => student.location === city);
}
