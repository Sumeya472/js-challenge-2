const students = [
  { name: "abel", correct: 5, total: 5 },
  { name: "sara", correct: 3, total: 5 },
  { name: "kal", correct: 4, total: 5 },
];

function grade(correct, total) {
  const percentage = Math.round((correct / total) * 100);

  return percentage >= 80 ? "PASS" : "FAIL";
}
const format = ({ name, correct, total }) => {
  return `${name.toUpperCase()}: ${correct}/${total} → ${grade(correct, total)}`;
};

const formattedStudents = students.map(format);
for (const student of formattedStudents) {
  console.log(student);
}
const passedStudents = students.filter((student) => {
  return grade(student.correct, student.total) === "PASS";
});
console.log(`Passed: ${passedStudents.length} of ${students.length}`);

const bestStudent = students.reduce((best, current) => {
  return current.correct > best.correct ? current : best;
});

console.log(
  `Best: ${bestStudent.name.toUpperCase()} with ${bestStudent.correct}`,
);

const everyoneScored = students.every((student) => student.correct > 0);

console.log("Everyone scored at least 1:", everyoneScored);
