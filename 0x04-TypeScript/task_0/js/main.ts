interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Abel',
  lastName: 'Fagbemi',
  age: 26,
  location: 'Lagos',
}

const student2: Student = {
  firstName: 'Glory',
  lastName: 'Fagbemi',
  age: 24,
  location: 'Benin',
}

const students: Array<Student> = [student1, student2]

const table  = document.getElementById('table') as HTMLTableElement;

students.forEach((student) => {
  const row = table.insertRow();
  row.insertCell(0).innerHTML = student.firstName;
  row.insertCell(1).innerHTML = student.location;
})