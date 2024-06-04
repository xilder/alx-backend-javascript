export default function updateStudentGradeByCity(students, city, newGrades) {
  if (
    Array.isArray(students)
    && typeof city === 'string'
    && Array.isArray(newGrades)
  ) {
    return students
      .filter((students) => students.location === city)
      .map((student) => {
        const data = newGrades.find((newGrade) => student.id === newGrade.studentId);
        const newGrade = data ? data.grade : 'N/A';
        return {
          ...student,
          grade: newGrade,
        };
      });
  }
  return [];
}
