const canvas = document.getElementById("spending-graph");
const ctx = canvas.getContext("2d");

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

let data = data1;

let height = -50;

canvas.height = canvas.width * 0.5;

const scaleUpFactor = 2.5;

let xStartingPoint = 0;
let yStartingPoint = 150;
let highestAmount = 0;
highestAmount = findHighest();

for (let i = 0; i < 7; i++) {
  ctx.fillStyle = "hsl(10, 79%, 65%)";
  ctx.strokeStyle = "hsl(10, 79%, 65%)";
  let height = data[i].amount * -1 * scaleUpFactor;
  if (data[i].amount === highestAmount) {
    ctx.fillStyle = "hsl(186, 34%, 60%)";
    ctx.strokeStyle = "hsl(186, 34%, 60%)";
    highestAmount = data[i].amount;
  }
  console.log("Highest Amount is: " + highestAmount);
  ctx.beginPath();

  ctx.roundRect(xStartingPoint, yStartingPoint, 32, height, 2);

  ctx.stroke();
  ctx.fill();
  xStartingPoint += 45;
  ctx.closePath();
}

function findHighest() {
    highestAmount = 0;
    for (let i = 0; i < 7; i++) { 
        if (data[i].amount > highestAmount) { 
            highestAmount = data[i].amount;
        }
    }
    return highestAmount;
}
