export default function createIteratorObject(report) {
  employees = [];
  for (const dept of Object.values(report)) {
    for (const employee of dept) {
      employees.push(employee);
    };
  };
  returm employees;
}
