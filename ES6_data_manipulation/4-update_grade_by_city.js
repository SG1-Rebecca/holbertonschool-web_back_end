export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  const studentsCity = students.filter((student) => student.location === city);

  // Map student grades
  return studentsCity.map((student) => {
    // Find student grade using their ID
    const gradeEntry = newGrades.find((grade) => grade.studentId === student.id);

    // Return updated student object with grade
    return {
      ...student,
      // If grade entry exists, use the grade; otherwise, set to 'N/A'
      grade: gradeEntry ? gradeEntry.grade : 'N/A',
    };
  });
}
