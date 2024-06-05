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
  location: 'Lagos'
}

const student2: Student = {
  firstName: 'Glory',
  lastName: 'Fagbemi',
  age: 26,
  location: 'Lagos'
}

const students: Array<Student> = [student1, student2];

const table = document.getElementById('table') as HTMLTableElement;

students.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0)
  const locationCell = row.insertCell(1)

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
})