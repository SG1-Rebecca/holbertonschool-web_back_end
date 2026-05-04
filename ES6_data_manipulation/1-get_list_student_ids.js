export default function getListStudentIds(students) {
  // Check if argument is an array
  if (!Array.isArray(students)) {
    return [];
  }
  // Return an array of student IDs using map
  return students.map((student) => student.id);
}
