export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const [departmentName, employees] of Object.entries(employeesList)) {
    allEmployees[departmentName] = [...employees];
  }
  return {
    allEmployees,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    };
}
