export default function createIteratorObject(report) {
  employees = [];
  for (const employee of Object.values(report.allEmployees)) {
    employees.push(employee);
  };
  return employees;
}
