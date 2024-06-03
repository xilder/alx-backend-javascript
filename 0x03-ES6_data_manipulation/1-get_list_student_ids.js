import getListStudents from './0-get_list_students';
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((student) => (student.id))
  }
  return [];
}