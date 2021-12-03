const helper = new Helper();

const dataObjects = [];
const letters = ['A', 'B', 'C', 'D', 'E'];

const random = Math.random() * 10;

for (let i = 0; i < 5; i++) {
  const obj = {};

  obj.label = letters[i];

  const dataArray = [];

  for (let j = 0; j < 12; j++) {
    const value = random + j + i * 0.1;

    const day = helper.randomIntFromInterval(1, 28);
    const date = new Date(2020, j, day);

    const coordinates = {
      x: date,
      y: value,
    };

    dataArray.push(coordinates);
  }

  obj.dataArray = dataArray;

  dataObjects.push(obj);
}

console.log(dataObjects);

displayChart(dataObjects);
