const classes = [
  { name: "yoga", hour: 9, capacity: 20, booked: 18 },
  { name: "spin", hour: 18, capacity: 15, booked: 15 },
  { name: "pilates", hour: 12, capacity: 12, booked: 5 },
  { name: "boxing", hour: 7, capacity: 10, booked: 9 },
];

function slot(hour) {
  if (hour < 12) {
    return "morning";
  } else if (hour < 17) {
    return "afternoon";
  } else {
    return "evening";
  }
}

const seatsLeft = ({ capacity, booked }) => {
  return capacity - booked;
};

const format = (cls) => {
  const left = seatsLeft(cls);

  const availability = left === 0 ? "FULL" : `${left} seats`;

  return `${cls.name.toUpperCase()} @ ${cls.hour}:00 (${slot(cls.hour)}) — ${availability}`;
};

const formattedClasses = classes.map(format);

for (const gymClass of formattedClasses) {
  console.log(gymClass);
}

const availableClasses = classes.filter((cls) => seatsLeft(cls) > 0);

console.log(`Classes with space: ${availableClasses.length}`);

const anyFull = classes.some((cls) => seatsLeft(cls) === 0);

const everyClassBooked = classes.every((cls) => cls.booked >= 5);

console.log("Any full classes:", anyFull);
console.log("Every class has 5+ booked:", everyClassBooked);

const totalBookings = classes.reduce((sum, cls) => {
  return sum + cls.booked;
}, 0);

console.log(`Total bookings: ${totalBookings}`);

const firstFull = classes.find((cls) => seatsLeft(cls) === 0);

console.log(`First full class: ${firstFull?.name ?? "none"}`);
