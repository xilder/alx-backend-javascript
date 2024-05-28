export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const [departmentName, employees] of Object.entries(employeesList)) {
    allEmployees[departmentName] = [...employees];
  }
  return {
    allEmployees,
    getNumberOfDepartments(numberOfDepts) {
      return Object.keys(numberOfDepts).length;
    }
}
