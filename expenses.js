const graph = document.getElementById("spending-graph");
const mon = document.querySelector(".monday");
const tue = document.querySelector(".tuesday");
const wed = document.querySelector(".wednesday");
const thu = document.querySelector(".thursday");
const fri = document.querySelector(".friday");
const sat = document.querySelector(".saturday");
const sun = document.querySelector(".sunday");

const data1 = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const data2 = [
  {
    day: "mon",
    amount: 12.45,
  },
  {
    day: "tue",
    amount: 55.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 1.07,
  },
  {
    day: "fri",
    amount: 22.39,
  },
  {
    day: "sat",
    amount: 22.28,
  },
  {
    day: "sun",
    amount: 13.48,
  },
];

let data = data2;

let startRow = 0;

for (i = 0; i < 7; i++) {
  startRow = 100 - Math.round(data[i].amount);
  let day = eval(data[i].day);
  day.style.gridRow = `${startRow}/ span ${Math.round(data[i].amount)}`;
}


