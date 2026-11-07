const employees = [
  { name: "Abel", salary: 8000, dept: "eng" },
  { name: "Sara", salary: 12000, dept: "sales" },
  { name: "Kal", salary: 9500, dept: "eng" },
  { name: "Dawit", salary: 7000, dept: "sales" },
  { name: "Marta", salary: 15000, dept: "eng" },
];

function tier(salary) {
  if (salary >= 12000) {
    return "senior";
  } else if (salary >= 9000) {
    return "mid";
  } else {
    return "junior";
  }
}
const format = ({ name, salary, dept }) => {
  return `${name.toUpperCase()} (${dept})-(${salary}) birr -(${tier(salary)})`;
};
const formattedEmployees = employees.map(format);
for (const employee of formattedEmployees) {
  console.log(employee);
}
const highEarner = employees.find((employee) => employee.salary >= 10000);

console.log(`First high earner: ${highEarner.name}`);

const hasLowSalary = employees.some((employee) => employee.salary < 8000);
const everyabove5000 = employees.some((employee) => employee.salary > 5000);
console.log("anyone earns under 8000:", hasLowSalary);

console.log("everyone earns over 5000:", everyabove5000);

const total = employees.reduce((sum, employee) => {
  return sum + employee.salary;
}, 0);

let average = Math.round(total / employees.length);

console.log("Total salary:", total);
console.log("Average salary:", average);

const salaries = employees.map((employee) => employee.salary);

const highest = Math.max(...salaries);
const lowest = Math.min(...salaries);
console.log(`Highest:${highest} , Lowest:${lowest}`);
