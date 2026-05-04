export default function getStudentIdsSum(students) {
  // accumulator, currentValue(student.id), initialValue is 0
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
